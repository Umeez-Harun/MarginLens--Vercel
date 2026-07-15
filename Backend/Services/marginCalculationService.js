function calculatePerceivedMargin(sellingPrice, purchaseCost) {
  if (sellingPrice <= 0) throw new Error("Selling price must be greater than 0");
  return parseFloat(((sellingPrice - purchaseCost) / sellingPrice * 100).toFixed(2));
}

function calculateTotalHiddenCost(sellingPrice, profile) {
  const returnCost = sellingPrice * (profile.returnRatePercent / 100);
  const paymentFee = sellingPrice * (profile.paymentFeePercent / 100);
  const total = returnCost + paymentFee + profile.packagingCost + profile.shippingCost + profile.miscCost;
  return parseFloat(total.toFixed(2));
}

function calculateRealMargin(sellingPrice, purchaseCost, totalHiddenCost) {
  if (sellingPrice <= 0) throw new Error("Selling price must be greater than 0");
  return parseFloat(((sellingPrice - purchaseCost - totalHiddenCost) / sellingPrice * 100).toFixed(2));
}

function calculateMarginGap(perceivedMargin, realMargin) {
  return parseFloat((perceivedMargin - realMargin).toFixed(2));
}

module.exports = {
  calculatePerceivedMargin,
  calculateTotalHiddenCost,
  calculateRealMargin,
  calculateMarginGap
}