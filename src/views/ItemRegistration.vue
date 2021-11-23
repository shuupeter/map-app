<template>

<v-container>
  <v-card
    class="mx-auto"
    style="max-width: 500px;"
  >

    <v-toolbar
      color="indigo"
      cards
      dark
      flat
    >
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-card-text class="text-h6 font-weight-bold text-center">
        アイテム登録
      </v-card-text>
      <v-spacer></v-spacer>
      <v-btn text class="font-weight-bold" color="indigo lighten-2">
        完了
      </v-btn>
    </v-toolbar>

    <v-form
      ref="form"
      v-model="form"
      class="pa-4 pt-6"
    >
      <v-text-field
        v-model="name"
        :rules="[required, limit_length]"
        filled
        color="deep-purple"
        counter="25"
        label="買ったもの*"
        style="min-height: 96px"
      ></v-text-field>
      <v-combobox
        ref="shop"
        v-model="shop"
        :rules="[required]"
        :items="shops"
        filled
        color="deep-purple"
        label="お店*"
      ></v-combobox>
      <v-combobox
        ref="brand"
        v-model="brand"
        :items="brandShops"
        filled
        color="deep-purple"
        label="ブランド"
      ></v-combobox>
      <v-textarea
        v-model="introduction"
        auto-grow
        filled
        color="deep-purple"
        label="紹介文"
        rows="2"
      ></v-textarea>
      <croppa v-model="myCroppa"
        :width="250"
        :height="250"
        placeholder="画像登録"
        :placeholder-font-size="15"
        placeholder-color="#616161"
        canvas-color="transparent"
        :disabled="false"
        :prevent-white-space="true"
        :show-remove-button="true"
        remove-button-color="grey"
        @file-choose="handleCroppaFileChoose"
        @file-size-exceed="handleCroppaFileSizeExceed"
        @file-type-mismatch="handleCroppaFileTypeMismatch"
        @image-remove="handleImageRemove"
        @move="handleCroppaMove"
        @zoom="handleCroppaZoom">  
      </croppa > 
      
      <v-checkbox
        v-model="agreement"
        :rules="[rules.required]"
        color="deep-purple"
      >
        <template v-slot:label>
          I agree to the&nbsp;
          <a
            href="#"
            @click.stop.prevent="dialog = true"
          >Terms of Service</a>
          &nbsp;and&nbsp;
          <a
            href="#"
            @click.stop.prevent="dialog = true"
          >Privacy Policy</a>*
        </template>
      </v-checkbox>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        text
        @click="$refs.form.reset()"
      >
        Clear
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!form"
        :loading="isLoading"
        class="white--text"
        color="deep-purple accent-4"
        depressed
      >
        Submit
      </v-btn>
    </v-card-actions>
    <v-dialog
      v-model="dialog"
      absolute
      max-width="400"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-3">
          Legal
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            text
            @click="agreement = false, dialog = false"
          >
            No
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="white--text"
            color="deep-purple accent-4"
            @click="agreement = true, dialog = false"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</v-container>
</template>

<script>
  export default {
    name:'ItemRegistration',
    data: () => ({
    shops:['A店','B店'],
    shop:null,
    brandShops:['A','B'],
    brand:null,
    agreement: false,
    bio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    password: undefined,
    phone: undefined,
    rules: {
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: v => !!v || 'This field is required',
      },
    }),
  }
</script>


<style scoped>
.croppa-container {
   background-color: #E0E0E0;
   width:252px;
   height:252px;
   border: 1px solid #757575;
   flex: 1;
   margin-left: auto;
   margin-right: auto;
   display: flex;
   flex-wrap:wrap-reverse;
   justify-content: flex-end;
   margin-top: 25px;
 }
 
 .croppa-container:hover {
   opacity: 1;
   background-color: #BDBDBD;
 }
</style>
