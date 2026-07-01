<script setup>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const product = reactive({
  name: '',
  categoryId: null,
  sellingPrice: null,
  purchaseCost: null,
  currencyCode: '',
})

const route = useRoute();
const product_id = route.params.id;

async function EditProduct(){
  const res = await axios.put(`http://localhost:3000/product/update/${product_id}`, product)
  console.log(res.status)
}
</script>

<template>
    <div class="container">
      <div class="page-header">
        <h1>Edit Product</h1>
        <a href="/products" class="btn btn-outline">Back to Products</a>
      </div>

      <div id="alert"></div>

      <div class="card" id="formCard">
        <div class="form-group">
          <label>Product Name</label>
          <input type="text" id="name" v-model="product.name" />
        </div>

        <div class="form-group">
          <label>Category</label>
          <select id="categoryId" v-model="product.category"></select>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Selling Price</label>
            <input type="number" id="sellingPrice" step="0.01" min="0" v-model="product.sellingPrice"/>
          </div>
          <div class="form-group">
            <label>Purchase Cost</label>
            <input type="number" id="purchaseCost" step="0.01" min="0" v-model="product.purchaseCost"/>
          </div>
        </div>

        <div class="form-group">
          <label>Currency</label>
          <select id="currencyCode" v-model="product.currencyCode">
            <option value="PKR">PKR — Pakistani Rupee</option>
            <option value="USD">USD — US Dollar</option>
          </select>
        </div>

        <button @click="EditProduct()" class="btn btn-primary">
          Update Product
        </button>
      </div>
    </div>
</template>