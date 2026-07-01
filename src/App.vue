<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <a class="brand" href="/">MarginLens</a>
      <ul>
        <li><RouterLink to="/">Dashboard</RouterLink></li>
        <li><RouterLink to="/products">Products</RouterLink></li>
        <li><a href="/categories">Categories</a></li>
        <li><RouterLink to="/report/product/">Report</RouterLink></li>
      </ul>
    </nav>
  </header>
  
  <RouterView />
</template>

<style scoped>

</style>
