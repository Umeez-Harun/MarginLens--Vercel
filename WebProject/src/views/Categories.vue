<script setup>
import { ref, reactive, onMounted} from 'vue'
import LoaderComponent from '@/components/icons/LoaderComponent.vue'
import { ValidateCategory } from '@/Validators/Validator'
import axios from 'axios'

const categories = ref([])
const isLoading = ref(false)

const category = reactive({
  name: ''
})

const error = ref('')

async function addCategory(){
    const res = await axios.post('http://localhost:3000/categories/add', category)
    console.log('Response', res.status)
 
}

async function loadCategories(){
  const res = await axios.get('http://localhost:3000/categories')
  categories.value = res.data
}

onMounted(() => {
  try{
    isLoading.value = true
    loadCategories();
  }
  catch(err){
    console.log(err)
  }
  finally{
    isLoading.value = false
  }
}) 
</script>

<template>
    <div class="container">
      <LoaderComponent v-if="isLoading"/>
      <h1>Categories</h1>
      <div id="alert"></div>

      <div class="card">
        <h2>Add Category</h2>
        <div class="form-row" style="align-items: flex-end">
          <div class="form-group" style="margin-bottom: 0">
            <div class="field-header">
            <label>Category Name</label>
            <span v-if="error" class="error">{{ error }}</span>
          </div>
            <input type="text" @input="error = category.name.trim() ? '' : 'Name is required'" placeholder="e.g. Electronics" v-model="category.name" />
          </div>
          <div>
            <button @click="addCategory" class="btn btn-primary">Add</button>
          </div>
        </div>
      </div>

      <div class="card">
        <h2>All Categories</h2>
        <div id="loading" class="loading" v-if="isLoading">Loading...</div>
        <table id="catTable" v-if="categories">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody id="catBody">
            <tr v-for="category in categories">
              <td>{{ category.id }}</td>
              <td>{{ category.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>