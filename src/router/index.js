import Vue from 'vue'
import VueRouter from 'vue-router'
import AppNavigation from '../components/AppNavigation.vue'
import MyPage from '../views/MyPage.vue'
import ItemRegistration from '../views/ItemRegistration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'AppNavigation',
    component:AppNavigation
  },
  {
    path:'/mypage',
    name:'MyPage',
    component:MyPage
  },
  {
    path:'/itemregistration',
    name:'ItemRegistration',
    component:ItemRegistration
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
