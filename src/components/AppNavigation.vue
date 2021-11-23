<template>
<div>
<v-btn
  color="blue-grey"
  class="white--text"
  elevation="5"
  fab
  small
  @click.stop="dialog = true"
>
  <v-icon size="24px">
  mdi-filter-variant
  </v-icon>
</v-btn>

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

     
  <v-dialog
      v-model="dialog"
      max-width="600"
  >

  <v-container ma-0 pa-0>
     <v-card
     flat
     tile
     >
      <v-card-text>
      <v-row
        align="center"
        justify="center"
        no-gutters
      >
        <v-col cols="12">
          <p class="text-center">
            営業時間
          </p>
        </v-col>
        <v-btn-toggle
          v-model="toggle_exclusive1"
          mandatory
        >
          <v-btn>
          全て
          </v-btn>
          <v-btn>
          営業中
          </v-btn>
        </v-btn-toggle>
      </v-row>
    </v-card-text>
  </v-card>

    <v-card
     flat
     tile
     >
      <v-card-text>
      <v-row
        align="center"
        justify="center"
        no-gutters
      >
        <v-col cols="12">
          <p class="text-center">
            お気に入り数
          </p>
        </v-col>
        <v-btn-toggle
          v-model="toggle_exclusive2"
          mandatory
        >
          <v-btn>
          全て
          </v-btn>
          <v-btn>
          10
          </v-btn>
          <v-btn>
          20
          </v-btn>
          <v-btn>
          30
          </v-btn>
          <v-btn>
          40
          </v-btn>
          <v-btn>
          50
          </v-btn>
        </v-btn-toggle>
      </v-row>
    </v-card-text>
  </v-card>
  
  <v-card
     flat
     tile
     >
      <v-card-text>
      <v-row
        align="center"
        justify="center"
        no-gutters
      >
        <v-col cols="12">
          <p class="text-center">
            ユーザー購入数
          </p>
        </v-col>
        <v-btn-toggle
          v-model="toggle_exclusive3"
          mandatory
        >
          <v-btn>
          全て
          </v-btn>
          <v-btn>
          10
          </v-btn>
          <v-btn>
          20
          </v-btn>
          <v-btn>
          30
          </v-btn>
          <v-btn>
          40
          </v-btn>
          <v-btn>
          50
          </v-btn>
        </v-btn-toggle>
      </v-row>
    </v-card-text>
  

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            キャンセル
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            保存
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    </v-dialog>

</div>
</template>


<script>
export default {
    name:'AppNavigation',

    data: () => ({
      dialog: false,
  }),
}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>