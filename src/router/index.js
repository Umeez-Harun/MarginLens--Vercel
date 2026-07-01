import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import EditProduct from '@/views/EditProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/product/create',
      name: 'create-product',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreateProduct.vue'),
    },
    {
      path: '/product/edit',
      name: 'edit-product',
      component: () => import('../views/EditProduct.vue')
    },
    {
      path:'/products',
      name: 'products',
      component: () => import('../views/ViewProducts.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/Categories.vue')
    },
    {
      path: '/cost-profile/:id',
      name: 'cost-profile',
      component: () => import('../views/CostProfile.vue')
    },
    {
      path: '/report/product/',
      name: 'report',
      component: () => import('../views/Report.vue')
    },
    {
      path:'/product/edit/:id',
      name: 'edit-product',
      component: () => import('../views/EditProduct.vue')
    }
  ],
})

export default router
