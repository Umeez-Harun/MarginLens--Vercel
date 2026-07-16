<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import LoaderComponent from '@/components/icons/LoaderComponent.vue';

const product = reactive({
  name: null,
  categoryId: null,
  sellingPrice: null,
  purchaseCost: null,
  currencyCode: null,
})
const isLoading = ref(false)
const route = useRoute();
const product_id = route.params.id;

const categories = ref([])
async function loadCategories(){

  const res = await axios.get('https://margin-lens-backend.vercel.app/categories')
  categories.value = res.data
}
onMounted(() => {
  loadCategories()
})
async function EditProduct(){
  try{
    isLoading.value = true
    const res = await axios.put(`https://margin-lens-backend.vercel.app/product/update/${product_id}`, product)
    isLoading.value = false
    console.log(res.status)
  }
  catch(err){
    console.log(err)
    isLoading.value = false
  }
  finally{
    isLoading.value = false
  }
}
</script>

<template>
    <div class="container">
      <LoaderComponent v-if="isLoading"></LoaderComponent>
      <div class="page-header">
        <h1>Edit Product</h1>
        <a href="/products" class="btn btn-outline">Back to Products</a>
      </div>

      <div id="alert"></div>

      <div class="card" id="formCard">
        <div class="form-group">
          <label>Product Name</label>
          <input type="text" id="name" v-model="product.name"/>
        </div>

        <div class="form-group">
          <label>Category</label>
          <select id="categoryId" v-model="product.categoryId">
            <option disabled>Select Category</option>
            <option v-for="cat in categories" :value="cat.id ">{{ cat.name }}</option>
          </select>
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