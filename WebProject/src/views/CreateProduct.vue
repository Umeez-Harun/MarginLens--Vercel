<script setup lang="ts">
import router from '@/router';
import { ref, reactive, onMounted } from 'vue';
import {validateProduct} from '../Validators/Validator'
import LoaderComponent from '@/components/icons/LoaderComponent.vue';
import axios from 'axios';

const product = reactive({
  name: '',
  categoryId: null,
  sellingPrice: 0,
  purchaseCost: 0,
  currencyCode: '',
})

const product_id = ref(0)
interface Category{
  id: number,
  name: string
}
const errors = reactive({
        name: '',
        categoryId: '',
        selling_price: '',
        buying_price: '',
        currencyId: '',
})

const isvalid = ref(false)
const isLoading = ref(false)
const categories = ref<Category[]>([])

async function CreateProduct(){
  try{
    isLoading.value = true
    const res = await axios.post('http://localhost:3000/products/add', product)
    isLoading.value = false
    router.push(`/cost-profile/${res.data.id}`)
  }
  catch(err){
    console.log(err)
  }
  finally{
    isLoading.value = false
  }
}

async function loadCategories(){

  const res = await axios.get('http://localhost:3000/categories')
  categories.value = res.data
}

onMounted(() => {
  try{
    loadCategories()
    console.log('Is Mounted')
  }
  catch(err){
      console.log('Failed Mounted')
  }
})
</script>

<template>
  <div class="container">
    <LoaderComponent v-if="isLoading"/>
      <div class="page-header">
        <h1>Add Product</h1>
        <a href="/products" class="btn btn-outline">Back to Products</a>
      </div>

      <div id="alert"></div>

      <div class="card">
        <div class="form-group">
          <div class="field-header">
            <label>Product Name</label>
            <span v-if="errors.name" class="error">{{ '*' + errors.name }}</span>
          </div>
          <input type="text" v-model="product.name" @input="errors.name = product.name.trim() ? '' : 'Name is required'" id="name" placeholder="e.g. Wireless Earbuds" />
        </div>

        <div class="form-group">
          <div class="field-header">
            <label>Category</label>
            <span v-if="errors.categoryId" class="error">{{ errors.categoryId }}</span>
          </div>
          <select id="categoryId" v-model.number="product.categoryId" @change="errors.categoryId = product.categoryId !== null ? '' : 'Category is required'">
            <option disabled>— Select Category —</option>
            <option v-for="cat in categories" :value="cat.id ">{{ cat.name }}</option>
          </select>
        </div>

        <div class="form-row">
          <div class="form-group">
            <div class="field-header">
            <label>Selling Price</label>
            <span v-if="errors.selling_price" class="error">{{ errors.selling_price }}</span>
          </div>
            <input
              type="number"
              v-model.number="product.sellingPrice"
              @input="errors.selling_price = (!product.sellingPrice === null || product.sellingPrice > 0) ? '' : 'Selling Price is required'"
              id="sellingPrice"
              placeholder="0.00"
              step="0.01"
              min="0"
            />
          </div>
          <div class="form-group">
            <div class="field-header">
            <label>Purchase Cost</label>
            <span v-if="errors.buying_price" class="error">{{ errors.buying_price }}</span>
          </div>
          <input
              type="number"
              v-model.number="product.purchaseCost"
              @input="errors.buying_price = (!product.purchaseCost === null || product.purchaseCost > 0) ? '' : 'Buying Price is required'"
              id="purchaseCost"
              placeholder="0.00"
              step="0.01"
              min="0"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="field-header">
            <label>Currency</label>
          <span v-if="errors.currencyId">{{ errors.currencyId }}</span>
          </div>
          <select id="currencyCode" v-model.number="product.currencyCode" @change="errors.currencyId = product.currencyCode !== null ? '' : 'Currency is required'">
            <option :value="null">Select Currency</option>
            <option value="PKR">PKR — Pakistani Rupee</option>
            <option value="USD">USD — US Dollar</option>
          </select>
        </div>

        <button @click=CreateProduct() class="btn btn-primary">
          Save Product
        </button>
      </div>
    </div>

</template>
