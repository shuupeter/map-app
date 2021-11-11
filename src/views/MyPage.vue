<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

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

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="4"
            class="hidden-xs-only"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <!--  -->
                <v-card
                max-width="375"
                class="mx-auto pa-3"
                >
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/lists/ali.png"
                    height="300px"
                    dark
                    >
                    <v-row class="fill-height">
                        <v-card-title>
                        <v-btn
                            dark
                            icon
                        >
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        </v-card-title>

                        <v-spacer></v-spacer>

                        <v-card-title class="white--text pl-12 pt-12">
                        <div class="text-h4 pl-12 pt-12">
                            Ali Conners
                        </div>
                        </v-card-title>
                    </v-row>
                    </v-img>

                    <v-list two-line>
                    <v-list-item>
                        <v-list-item-icon>

                        <v-icon color="indigo">
                            mdi-phone
                        </v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                        <v-list-item-title>(650) 555-1234</v-list-item-title>
                        <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-icon>
                        <v-icon>mdi-message-text</v-icon>
                        </v-list-item-icon>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-action></v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>(323) 555-6789</v-list-item-title>
                        <v-list-item-subtitle>Work</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-icon>
                        <v-icon>mdi-message-text</v-icon>
                        </v-list-item-icon>
                    </v-list-item>

                    <v-divider inset></v-divider>

                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon color="indigo">
                            mdi-email
                        </v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                        <v-list-item-title>aliconnors@example.com</v-list-item-title>
                        <v-list-item-subtitle>Personal</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-action></v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>ali_connors@example.com</v-list-item-title>
                        <v-list-item-subtitle>Work</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-divider inset></v-divider>

                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon color="indigo">
                            mdi-map-marker
                        </v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                        <v-list-item-title>1400 Main Street</v-list-item-title>
                        <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
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
              min-height="85vh"
              rounded="lg"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name:'MyPage',
    data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
    }),
  }
</script>