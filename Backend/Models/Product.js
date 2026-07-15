const mongoose = require('mongoose');

const hiddenCostProfileSchema = new mongoose.Schema({
  productId: Number,
  returnRatePercent: Number,
  paymentFeePercent: Number,
  packagingCost: Number,
  shippingCost: Number,
  miscCost: Number,
}, { _id: false });

const latestReportSchema = new mongoose.Schema({
  id: Number,
  productId: Number,
  productName: String,
  perceivedMargin: Number,
  realMargin: Number,
  marginGap: Number,
  totalHiddenCost: Number,
  sellingPricePkr: Number,
  purchaseCostPkr: Number,
  convertedCostUsed: Number,
  exchangeRateUsed: Number,
  calculatedAt: String,
}, { _id: false });

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  categoryId: { type: Number, required: true },
  name: { type: String, required: true },
  sellingPrice: { type: Number, required: true },
  purchaseCost: { type: Number, required: true },
  currencyCode: { type: String, required: true },
  createdAt: { type: String },
  hiddenCostProfile: { type: hiddenCostProfileSchema, default: null },
  latestReport: { type: latestReportSchema, default: null },
});

module.exports = mongoose.model('Product', productSchema);
