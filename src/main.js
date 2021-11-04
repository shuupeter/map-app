import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueGoogleMaps from 'vue2-google-maps'
import { firestorePlugin } from 'vuefire'


Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAsfpZOarz-bjVy6oEJuPkQGaskfeaAJ3I',
    libraries: 'places',
    region: 'JP',
    language: 'ja'
  }
},
)

Vue.use(firestorePlugin)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
