<script setup>
import { ref, reactive } from 'vue';

const Products = reactive([])
const isLoading = ref(false)

</script>

<template>
  <main>
    <div class="container">
      <div class="page-header">
        <h1>Profit Illusion Dashboard</h1>
      </div>

      <div id="alert"></div>
      <div id="loading" class="loading" v-if="isLoading">Loading ranked products...</div>

      <div id="content" v-if="Products.length > 0">
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
              </tr>
            </thead>
            <tbody id="rankTable"></tbody>
          </table>
        </div>
      </div>

      <div id="emptyState" class="empty-state" v-if="Products.length === 0">
        <p>No calculated products yet.</p>
        <a href="/products" class="btn btn-primary">Go to Products</a>
      </div>
    </div>
  </main>
</template>
