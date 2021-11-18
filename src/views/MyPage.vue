<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="4"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
                <v-card
                max-width="400"
                class="mx-auto pa-3"
                flat
                >
                    <v-img
                    src="https://firebasestorage.googleapis.com/v0/b/neat-tangent-33111.appspot.com/o/スクリーンショット%202021-08-25%208.15.48（2）.png?alt=media&token=9823efb8-b1de-40b5-b72f-97b20f76c3e3"
                    height="250px"
                    >
                        <v-card-title>
                            <v-btn
                            dark
                            icon
                            >
                                <v-icon>
                                    mdi-pencil
                                </v-icon>
                            </v-btn>
                        </v-card-title>
                    </v-img>

                         <v-card-title>
                            Ali Conners
                         </v-card-title>

                    <v-list two-line>
                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon color="indigo">
                            mdi-link-variant
                        </v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                        <v-list-item-title>instagram.com/hykwhykw/?....</v-list-item-title>
                        <v-list-item-subtitle></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-icon>
                        <v-icon>mdi-message-text</v-icon>
                        </v-list-item-icon>
                    </v-list-item>

                    <v-divider inset></v-divider>

                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon color="indigo">
                            mdi-map-marker
                        </v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                        <v-list-item-title>Kanagawa</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list>
                </v-card> 
            </v-sheet>
          </v-col>

          <v-col
            cols="12"
            sm="8"
          >
            <v-sheet
              min-height="500vh"
              rounded="lg"
              class="pa-3"
            >

              <!--  -->
              <template>
                <v-row >
                    <v-col
                    v-for="n in 9"
                    :key="n"
                    class="d-flex child-flex"
                    cols="4"
                    >
                    <v-img
                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                        aspect-ratio="1"
                        class="grey lighten-2"
                        @click="overlay = !overlay"
                    >
                        <template v-slot:placeholder>
                        <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                        >
                            <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                            ></v-progress-circular>
                        </v-row>
                        </template>
                    </v-img>
                
                    <v-overlay
                        :z-index="zIndex"
                        :value="overlay"
                    >
                        <v-img
                            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                            aspect-ratio="1"
                            width="300px"
                            max-height="auto"
                            class="grey lighten-2"
                            @click="overlay = !overlay"
                        >
                        </v-img>
                    </v-overlay>
                    </v-col>
                </v-row>
                </template>
            </v-sheet>
          </v-col>
        </v-row>
            <v-btn
                color="blue-grey"
                class="white--text"
                fab
                fixed bottom right
                >
                    <v-icon dark>
                        mdi-plus
                    </v-icon>
            </v-btn>
      </v-container>
    </v-main>
    <v-footer
   padless
   dark
   fixed
  >
    <v-row
     justify="space-around"
     no-gutters
    >

    <ul>
    <router-link tag="li" list-style="none"  to="/">
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
     </ul>

    <ul>
    <router-link tag="li" to="/mypage">
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
    </ul>

    </v-row>
  </v-footer>
  </v-app>
</template>

<script>
  export default {
    name:'MyPage',
    data: () => ({
      links: [
        '購入アイテム',
        'お気に入り店舗',
      ],
      overlay: false,
      zIndex: 0,
    }),
  }
</script>

<style scoped>
ul {
  list-style: none;
}
</style>