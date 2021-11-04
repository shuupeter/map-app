<template>
  <v-app>
    <router-view/>
    <About />
    <GoogleMap></GoogleMap>
    <app-navigation></app-navigation>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation" ;
import GoogleMap from "@/components/GoogleMap" ;
import About from "./views/About" ;



export default {
  name: 'App',
  components: {
    AppNavigation,
    GoogleMap,
    About
  }
  };

</script>
