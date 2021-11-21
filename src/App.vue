<template>
  <v-app>
    <router-view/>
    <About />
    <GoogleMap></GoogleMap>
  </v-app>
</template>

<script>
import GoogleMap from "@/components/GoogleMap" ;
import About from "./views/About" ;

export default {
  components: {
    GoogleMap,
    About
  }
};

</script>
