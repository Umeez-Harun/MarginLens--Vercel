const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  productId: { type: Number, required: true },
  productName: String,
  perceivedMargin: Number,
  realMargin: Number,
  marginGap: Number,
  totalHiddenCost: Number,
  sellingPricePkr: Number,
  purchaseCostPkr: Number,
  convertedCostUsed: Number,
  exchangeRateUsed: Number,
  calculatedAt: { type: String, required: true },
});

module.exports = mongoose.model('Report', reportSchema);
