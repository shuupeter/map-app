import Vue from 'vue'
import VueRouter from 'vue-router'
import AppNavigation from '../components/AppNavigation.vue'
import MyPage from '../views/MyPage.vue'
import ItemRegistration from '../views/ItemRegistration.vue'
import store from '../store'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'


const routes = [
  {
    path:'/',
    name:'AppNavigation',
    component:AppNavigation
  },
  {
    path:'/mypage',
    name:'MyPage',
    component:MyPage,
    beforeEnter(to, from, next){
      console.log(store.state.idToken)
      console.log(store.getters.idToken)
      if(store.getters.idToken){
        next();
      } else {
        next("/signin");
      }
    },
  },
  {
    path:'/itemregistration',
    name:'ItemRegistration',
    component:ItemRegistration
  },
  {
    path:'/signin',
    name:'SignIn',
    component:SignIn,
    beforeEnter(to, from, next){
      console.log(store.state.idToken)
      console.log(store.getters.idToken)
      if(store.getters.idToken){
        next("/mypage");
      } else {
        next();
      }
    },
  },
  {
    path:'/signup',
    name:'SignUp',
    component:SignUp,
    beforeEnter(to, from, next){
      console.log(store.state.idToken)
      console.log(store.getters.idToken)
      if(store.getters.idToken){
        next("/mypage");
      } else {
        next();
      }
    },
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

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export {router} ;
