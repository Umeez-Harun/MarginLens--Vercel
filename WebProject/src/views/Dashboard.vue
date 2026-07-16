<script setup>
import axios from 'axios';
import LoaderComponent from '@/components/icons/LoaderComponent.vue';
import { ref, reactive, onMounted } from 'vue';

const products = ref([])
const isLoading = ref(false)

async function loadRankedProducts(){
  const res = await axios.get('https://margin-lens-backend.vercel.app/products/ranked')
  products.value = res.data
}
onMounted(() => {
  try{
    isLoading.value = true;
    loadRankedProducts()
    isLoading.value = false;
    console.log('Valid')
  }
  catch(err){
    isLoading.value = false;
    console.log(err)
  }
  finally{
    isLoading.value = false;
  }
})
</script>

<template>
  <main>
    <div class="container">
      <LoaderComponent v-if="isLoading" />
      <div class="page-header">
        <h1>Profit Illusion Dashboard</h1>
      </div>

      <div id="alert"></div>
      <div id="loading" class="loading" v-if="isLoading">Loading ranked products...</div>

      <div id="content" v-if="products.length > 0 && !isLoading">
        <div class="stats-row" id="stats"></div>
        <div class="card">
          <h2>Products Ranked by Margin Gap (Highest First)</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Category</th>
                <th>Perceived Margin</th>
                <th>Real Margin</th>
                <th>Margin Gap</th>
                <th>Last Calculated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="rankTable">
              <tr v-for="product in products">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.category || '-'}}</td>
                <td>{{ product.perceivedMargin || '-' }}</td>
                <td>{{ product.realMargin || '-' }}</td>
                <td>{{ product.marginGap || '-' }}</td>
                <td>{{ product.lastCalculated ? new Date(product.lastCalculated).toLocaleDateString() : '—' }}</td>
                <td class="actions">
                  <RouterLink :to="`/product/report/${product.id}`" class="btn-action btn-report">Report</RouterLink>
              </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="emptyState" class="empty-state" v-if="products.length === 0 && !isLoading">
        <p>No calculated products yet.</p>
        <RouterLink to="/products" class="btn btn-primary">Go to Products</RouterLink>
      </div>
    </div>
  </main>
</template>
