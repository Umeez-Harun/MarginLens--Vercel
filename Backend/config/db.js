const mongoose = require('mongoose');
const Category = require('../Models/Category.js');
const Product = require('../Models/Product.js');
const Counter = require('../Models/Counter.js');

async function connectDB() {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/marginlens';
  await mongoose.connect(uri);
  console.log('MongoDB connected');
  await seedInitialData();
}

// Only seeds if the collections are empty, so it's safe to run on every restart.
async function seedInitialData() {
  const categoryCount = await Category.countDocuments();
  if (categoryCount === 0) {
    await Category.insertMany([
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Food' },
      { id: 3, name: 'Imported' },
      { id: 4, name: 'Clothing' },
      { id: 5, name: 'Accessories' },
    ]);
    await Counter.findOneAndUpdate({ _id: 'categoryId' }, { seq: 5 }, { upsert: true });
  }

  const productCount = await Product.countDocuments();
  if (productCount === 0) {
    await Product.create({
      id: 1,
      categoryId: 1,
      name: 'Iphone 17',
      sellingPrice: 105000,
      purchaseCost: 95000,
      currencyCode: 'PKR',
      createdAt: new Date().toISOString(),
      hiddenCostProfile: null,
      latestReport: null,
    });
    await Counter.findOneAndUpdate({ _id: 'productId' }, { seq: 1 }, { upsert: true });
  }
}

module.exports = connectDB;
