const _productService = require('./ProductService.js')

async function getCostProfile(productId) {
  const product = await _productService.getProductById(productId);
  if (!product) throw new Error("Product not found");
  return product.hiddenCostProfile;
}

async function upsertCostProfile(productId, { returnRatePercent, paymentFeePercent, packagingCost, shippingCost, miscCost }) {
  const product = await _productService.getProductById(productId);
  if (!product) throw new Error("Product not found");

  const profile = {
    productId: parseInt(productId),
    returnRatePercent: parseFloat(returnRatePercent) || 0,
    paymentFeePercent: parseFloat(paymentFeePercent) || 0,
    packagingCost: parseFloat(packagingCost) || 0,
    shippingCost: parseFloat(shippingCost) || 0,
    miscCost: parseFloat(miscCost) || 0,
  };

  await _productService.setHiddenCostProfile(productId, profile);
  return profile;
}

module.exports = {
  getCostProfile,
  upsertCostProfile,
}
