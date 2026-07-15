const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db.js');
const _categoryService = require('./Services/CategoryService.js')
const _productService = require('./Services/ProductService.js')
const _costProfileService = require('./Services/CostProfileService.js');
const _reportingService = require('./Services/reportingService.js');
const app = express();

app.use(cors());
app.use(express.json());



app.get('/categories', async (req, res) => {
    res.json(await _categoryService.getAllCategories());
});

app.get('/products', async (req, res) => {
    res.json(await _productService.getAllProducts());
});

app.get('/product/cost-profile/get/:id', async (req, res) => {
    const product = await _costProfileService.getCostProfile(req.params.id);
    if(!product){
        return res.status(404).json(null)
    }
    res.status(200).json(product);
});

app.post('/categories/add', async (req, res) => {
    const { name } = req.body;
    await _categoryService.addCategory(name)
    res.sendStatus(201)
})

app.post('/products/add', async (req, res) => {
    const {
        name,
        categoryId,
        sellingPrice,
        purchaseCost,
        currencyCode,
    } = req.body;
    const product = await _productService.addProduct({ name, categoryId, sellingPrice, purchaseCost, currencyCode,});
    res.status(201).json({id: product.id})
});

app.put('/product/update/:id', async (req, res) => {
    const id = req.params.id;
    const {
        name,
        categoryId,
        sellingPrice,
        purchaseCost,
        currencyCode,
    } = req.body;
    await _productService.updateProduct(id, {
        name,
        categoryId,
        sellingPrice,
        purchaseCost,
        currencyCode,
    })
    res.sendStatus(200)
});

app.delete('/product/delete/:id', async (req, res) => {
    const id = req.params.id;
    await _productService.deleteProduct(id)
    res.sendStatus(204)
})
app.post('/product/cost-profile/add/:id', async (req, res) => {
    const id = req.params.id;
    const {
        returnRatePercent,
        paymentFeePercent,
        packagingCost,
        shippingCost,
        miscCost
    } = req.body;
    await _costProfileService.upsertCostProfile(id, {
        returnRatePercent,
        paymentFeePercent,
        packagingCost,
        shippingCost,
        miscCost
    });
    await _reportingService.generateAndSaveReport(id);
    res.sendStatus(201)
});

app.get('/product/report/:id', async (req, res) => {
    const id = req.params.id;
    const report = await _reportingService.getReportByProduct(id)
    if(!report){
        return res.status(404).json(null)
    }
    return res.status(200).json(report)
})
app.get('/products/ranked', async (req, res) => {
    const ranked = await _reportingService.getRankedProducts();
    if(!ranked){
        return res.status(404).json(null)
    }
    return res.status(200).json(ranked)
})
const PORT = 3000;

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running on http://localhost:${PORT}`);
});
