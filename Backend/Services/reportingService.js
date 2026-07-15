const _productService = require('./ProductService.js')
const _currencyService = require('./CurrencyService.js')
const _marginService = require('./marginCalculationService.js')
const Report = require('../Models/Report.js');
const { getNextSequence } = require('./CounterService.js');

async function generateAndSaveReport(productId) {
  const product = await _productService.getProductById(productId);
  if (!product) throw new Error("Product not found");
  if (!product.hiddenCostProfile) throw new Error("Hidden cost profile not set for this product. Please add cost profile first.");

  let sellingPrice = product.sellingPrice;
  let purchaseCost = product.purchaseCost;
  let exchangeRateUsed = null;
  let convertedCostUsed = null;

  // Step 1: Convert USD to PKR if needed
  if (product.currencyCode === "USD") {
    const { convertedAmount: convertedSelling, rate } = await _currencyService.convertUsdToPkr(sellingPrice);
    const { convertedAmount: convertedPurchase } = await _currencyService.convertUsdToPkr(purchaseCost);
    exchangeRateUsed = rate;
    convertedCostUsed = convertedSelling;
    sellingPrice = convertedSelling;
    purchaseCost = convertedPurchase;
  }

  // Step 2-7: Run all calculations
  const perceivedMargin = _marginService.calculatePerceivedMargin(sellingPrice, purchaseCost);
  const totalHiddenCost = _marginService.calculateTotalHiddenCost(sellingPrice, product.hiddenCostProfile);
  const realMargin = _marginService.calculateRealMargin(sellingPrice, purchaseCost, totalHiddenCost);
  const marginGap = _marginService.calculateMarginGap(perceivedMargin, realMargin);

  const id = await getNextSequence('reportId');
  const report = {
    id,
    productId: parseInt(productId),
    productName: product.name,
    perceivedMargin,
    realMargin,
    marginGap,
    totalHiddenCost,
    sellingPricePkr: sellingPrice,
    purchaseCostPkr: purchaseCost,
    convertedCostUsed,
    exchangeRateUsed,
    calculatedAt: new Date().toISOString(),
  };

  // Step 8: Save report
  await Report.create(report);
  await _productService.setLatestReport(productId, report);

  return report;
}

async function getReportByProduct(productId) {
  const productReports = await Report.find({ productId: parseInt(productId) })
    .sort({ calculatedAt: -1 })
    .lean();
  return productReports[0] || null;
}

async function getRankedProducts() {
  const products = await _productService.getAllProducts();
  return products
    .filter((p) => p.latestReport) //  Safe: Filters out both null and undefined
    .map((p) => ({
      id: p.id,
      name: p.name,
      category: p.category?.name || "—",
      currencyCode: p.currencyCode,
      perceivedMargin: p.latestReport.perceivedMargin,
      realMargin: p.latestReport.realMargin,
      marginGap: p.latestReport.marginGap,
      lastCalculated: p.latestReport.calculatedAt,
    }))
    .sort((a, b) => b.marginGap - a.marginGap);
}

module.exports = {
  getRankedProducts,
  generateAndSaveReport,
  getReportByProduct
}
