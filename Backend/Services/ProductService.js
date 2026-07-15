const _categoryService = require('./CategoryService.js');
const Product = require('../Models/Product.js');
const { getNextSequence } = require('./CounterService.js');

async function getAllProducts() {
  const products = await Product.find().lean();
  return Promise.all(
    products.map(async (p) => ({
      ...p,
      category: await _categoryService.getCategoryById(p.categoryId),
    }))
  );
}

async function getProductById(id) {
  const p = await Product.findOne({ id: parseInt(id) }).lean();
  if (!p) return null;
  return { ...p, category: await _categoryService.getCategoryById(p.categoryId) };
}

async function addProduct({ name, categoryId, sellingPrice, purchaseCost, currencyCode }) {
  if (!name || !categoryId || !sellingPrice || !purchaseCost || !currencyCode)
    throw new Error("All product fields are required");
  if (!["PKR", "USD"].includes(currencyCode))
    throw new Error("Currency must be PKR or USD");
  if (!(await _categoryService.getCategoryById(categoryId)))
    throw new Error("Invalid category");

  const id = await getNextSequence('productId');
  const product = await Product.create({
    id,
    name: name.trim(),
    categoryId: parseInt(categoryId),
    sellingPrice: parseFloat(sellingPrice),
    purchaseCost: parseFloat(purchaseCost),
    currencyCode,
    createdAt: new Date().toISOString(),
    hiddenCostProfile: null,
    latestReport: null,
  });
  return product.toObject();
}

async function updateProduct(id, { name, categoryId, sellingPrice, purchaseCost, currencyCode }) {
  const p = await Product.findOne({ id: parseInt(id) });
  if (!p) throw new Error("Product not found");
  if (categoryId && !(await _categoryService.getCategoryById(categoryId)))
    throw new Error("Invalid category");

  p.name = name?.trim() ?? p.name;
  p.categoryId = categoryId ? parseInt(categoryId) : p.categoryId;
  p.sellingPrice = sellingPrice ? parseFloat(sellingPrice) : p.sellingPrice;
  p.purchaseCost = purchaseCost ? parseFloat(purchaseCost) : p.purchaseCost;
  p.currencyCode = currencyCode ?? p.currencyCode;

  console.log(p)
  await p.save();
  return p.toObject();
}

async function deleteProduct(id) {
  const result = await Product.findOneAndDelete({ id: parseInt(id) });
  if (!result) throw new Error("Product not found");
}

async function setHiddenCostProfile(productId, profile) {
  const result = await Product.findOneAndUpdate(
    { id: parseInt(productId) },
    { hiddenCostProfile: profile }
  );
  if (!result) throw new Error("Product not found");
}

async function setLatestReport(productId, report) {
  const result = await Product.findOneAndUpdate(
    { id: parseInt(productId) },
    { latestReport: report }
  );
  if (!result) throw new Error("Product not found");
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
    setHiddenCostProfile,
    setLatestReport
}
