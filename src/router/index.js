import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Citizen from '../views/Citizen.vue' 
import Login from '../components/Admin/Login.vue' 
import Success from '../views/Success.vue'
import Demographics from '../views/Demographics.vue'
import Census from '../views/Census.vue'
import Admin from '../views/Admin.vue'
import Details from '../views/Details.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/citizen',
    name: 'Citizen',
    component: Citizen
  },
  {
    path: '/census',
    name: 'census',
    component: Census
  },
  {
    path: '/details',
    name: 'details',
    component: Details
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/demographics',
    name: 'demographics',
    component: Demographics
  },
  {
    path: '/Success',
    name: 'Success',
    component: Success
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
