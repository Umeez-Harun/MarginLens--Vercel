<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue'
import axios from 'axios';

const report = ref({})
const route = useRoute()
const product_id = route.params.id
async function getReport(){
  const res = await axios.get(`https://margin-lens-backend.vercel.app/product/report/${product_id}`)
  report.value = res.data
}

onMounted(() => {
  getReport()
})
</script>


<template>
    <div class="container">
      <div class="page-header">
        <h1 id="reportTitle">Margin Report</h1>
        <a href="/products" class="btn btn-outline">Back to Products</a>
      </div>

      <div id="alert"></div>
      <div id="loading" class="loading" v-if="!report">Loading report...</div>

      <div id="content" v-if="report">
        <div class="stats-row">
          <div class="stat-card">
            <div class="stat-label">Perceived Margin</div>
            <div class="stat-value green" id="perceived">{{report.perceivedMargin}}%</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Real Margin</div>
            <div class="stat-value orange" id="real">{{report.realMargin}}%</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Margin Gap</div>
            <div class="stat-value red" id="gap">{{report.marginGap}}%</div>
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
            <tbody id="breakdown">
              <tr>
                <td>Name</td>
                <td>{{report?.productName || '-'}}</td>
              </tr>
              <tr>
                <td>Total Hidden Cost</td>
                <td>{{ 'PKR: ' + report?.totalHiddenCost || '-'}}</td>
              </tr>
              <tr>
                <td>Purchase cost</td>
                <td>{{ 'PKR: ' + report?.purchaseCostPkr || '-' }}</td>
              </tr>
              <tr>
                <td>Selling Price</td>
                <td>{{ 'PKR: ' + report?.sellingPricePkr || '-' }}</td>
              </tr>
              <tr>
                <td>Net Profit</td>
                <td>{{ report ? 'PKR: ' + (report.sellingPricePkr - report.purchaseCostPkr - report.totalHiddenCost) : '-' }}</td>
              </tr>
              <tr>
                <td>Calculated At</td>
                <td>{{ report.calculatedAt ? new Date(report.calculatedAt).toLocaleDateString() : '—' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

</template>