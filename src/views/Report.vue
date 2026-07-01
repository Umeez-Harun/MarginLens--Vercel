<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue'
import axios from 'axios'

const cost = ref({})
async function getCostProfile(){
  const res = await axios.get(`http://localhost:3000/product/cost-profile/get/${product_id}`)
  cost.value = res.data
}
</script>


<template>
    <div class="container">
      <div class="page-header">
        <h1 id="reportTitle">Margin Report</h1>
        <a href="/products" class="btn btn-outline">Back to Products</a>
      </div>

      <div id="alert"></div>
      <div id="loading" class="loading">Loading report...</div>

      <div id="content">
        <div class="stats-row">
          <div class="stat-card">
            <div class="stat-label">Perceived Margin</div>
            <div class="stat-value green" id="perceived"></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Real Margin</div>
            <div class="stat-value orange" id="real"></div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Margin Gap</div>
            <div class="stat-value red" id="gap"></div>
          </div>
        </div>

        <div class="card">
          <h2>Breakdown</h2>
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody id="breakdown"></tbody>
          </table>
        </div>
      </div>
    </div>

</template>