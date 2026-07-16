<script setup>
import router from '@/router';
import axios from 'axios';
import { ref, reactive, onMounted} from 'vue'
import LoaderComponent from '@/components/icons/LoaderComponent.vue';

const products = ref([])
const categories = ref([])
const isLoading = ref(false)

async function loadProducts(){
  try{
    isLoading.value = true
    const res = await axios.get('https://margin-lens-backend.vercel.app/products')
    isLoading.value = false
    products.value = res.data
  }
  catch(err){
    console.log(err)
  }
  finally{
    isLoading.value = false
  }
}

onMounted(() => {
  loadProducts()
})

async function deleteProduct(id){
  try{
    isLoading.value = true
    const res = await axios.delete(`https://margin-lens-backend.vercel.app/product/delete/${id}`)
    isLoading.value = false
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
      <LoaderComponent v-if="isLoading" />
      <div class="page-header">
        <h1>Products</h1>
        <RouterLink to="/product/create" class="btn btn-primary">+ Add Product</RouterLink>
      </div>

      <div id="alert"></div>
      <div id="loading" class="loading" v-if="isLoading">Loading products...</div>

      <div class="card" id="content" v-if="products.length > 0">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Selling Price</th>
              <th>Purchase Cost</th>
              <th>Currency</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="productTable">
            <tr v-for="product in products">
              <td>{{ product.name }}</td>
              <td>{{ product.category?.name }}</td>
              <td>{{ product.sellingPrice }}</td>
              <td>{{ product.purchaseCost }}</td>
              <td>{{ product.currencyCode }}</td>
                <td class="actions">
                  <RouterLink :to="`/product/edit/${product.id}`" class="btn-action btn-edit">Edit</RouterLink>
                  <RouterLink :to="`/product/report/${product.id}`" class="btn-action btn-report">Report</RouterLink>
                  <button @click="deleteProduct(product.id)" class="btn-action btn-delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="emptyState" class="empty-state" v-if="products.length === 0">
        <p>No products yet.</p>
        <RouterLink to="/product/create" class="btn btn-primary">Add Your First Product</RouterLink>
      </div>
    </div>
</template>