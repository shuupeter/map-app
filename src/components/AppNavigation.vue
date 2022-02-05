<template>
  <div>
    <FilterBotton />
      <v-footer
        padless
        dark
        fixed
      >
        <v-row
          justify="space-around"
          no-gutters
        >
          <router-link to="/">
            <v-btn
              rounded
              class="my-2"
              elevation="0"
              icon
            >
              <v-icon size="24px">
                mdi-map-marker  
              </v-icon>
            </v-btn>
          </router-link>
          <router-link to="/mypage">
            <v-btn
              rounded
              class="my-2"
              elevation="0"
              icon
            >
              <v-icon size="24px">
                mdi-account    
              </v-icon>
            </v-btn>
          </router-link>
        </v-row>
      </v-footer>
  </div>
</template>

<script>
import FilterBotton from "../views/FilterBotton.vue"

export default {
    name: 'AppNavigation',
    components: {
      FilterBotton,
    },
    data: () => ({
      dialog: false,
  }),
}
</script>

<style scoped>
a {
    text-decoration: none ;
}
</style>