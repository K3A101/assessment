import { createRouter, createWebHistory } from 'vue-router'
import HomeListingList from '../views/HomeListingList.vue'
import NotFound  from '../views/NotFound.vue'
import About  from '../views/About.vue'
import CreateHomeForm from '../views/create/CreateHomeForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeListingList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/create-house',
    name: 'CreateHomeForm',
    component: CreateHomeForm
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
