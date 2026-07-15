const Category = require('../Models/Category.js');
const { getNextSequence } = require('./CounterService.js');

async function getAllCategories() {
  return await Category.find().lean();
}

async function getCategoryById(id) {
  return await Category.findOne({ id: parseInt(id) }).lean();
}

async function addCategory(name) {
  if (!name || !name.trim()) {
    throw new Error("Category name is required");
  }

  const all = await Category.find().lean();
  const exists = all.find((c) => c.name.toLowerCase() === name.trim().toLowerCase());
  if (exists) throw new Error("Category already exists");

  const id = await getNextSequence('categoryId');
  const category = await Category.create({ id, name: name.trim() });
  return category.toObject();
}

module.exports = {
    getCategoryById,
    getAllCategories,
    addCategory
}
