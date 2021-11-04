<template>
  <v-footer
   padless
   dark
   fixed
  >

    <v-row
     justify="space-around"
     no-gutters
    >

     <v-btn
      v-for="icon in icons"
      :key="icon"
      rounded
      class="my-2"
     >
     <v-icon size="24px">
     {{icon}}
     </v-icon>
     </v-btn>
    </v-row>
  </v-footer>
</template>


<script>
export default {
    name:'AppNavigation',

    data: () => ({
      icons: [
        'mdi-filter-variant',
        'mdi-account',
      ],
  }),
}
</script>