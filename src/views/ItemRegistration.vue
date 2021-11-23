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
      <v-btn text 
        :disabled="!Checked"
        :loading="isLoading"
        class="font-weight-bold white--text"
        color="white--text"
      >
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
        accept="image/png, image/jpeg, image/bmp"
        :width="250"
        :height="250"
        placeholder="画像登録*"
        :placeholder-font-size="15"
        placeholder-color="#616161"
        canvas-color="transparent"
        :disabled="false"
        :prevent-white-space="true"
        :show-remove-button="true"
        remove-button-color="grey"
        @file-size-exceed="handleCroppaFileSizeExceed"
        @file-type-mismatch="handleCroppaFileTypeMismatch"
        @image-remove="handleImageRemove"
        @move="handleCroppaMove"
        @zoom="handleCroppaZoom">  
      </croppa > 
    </v-form>
  </v-card>
</v-container>
</template>


<script>
  export default {
    name:'ItemRegistration',
    data: () => ({
    name:null,
    shops:['A店','B店'],
    shop:null,
    brandShops:['A','B'],
    brand:null,
    agreement: false,
    form: false,
    isLoading: false,
    rules: {
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: v => !!v || 'This field is required',
      },
    }),
    computed: {
    Checked() {
      return this.name && this.shop && this.myCroppa.generateDataUrl();
    }
  },
  }
</script>


<style scoped>
.croppa-container {
   background-color: #E0E0E0;
   width:250px;
   height:250px;
   /* border: 1px solid #757575; */
   flex: 1;
   margin-left: auto;
   margin-right: auto;
   display: flex;
   flex-wrap:wrap-reverse;
   justify-content: flex-end;
   margin-top: 25px;
   margin-bottom: 25px;
 }
 
 .croppa-container:hover {
   opacity: 1;
   background-color: #BDBDBD;
 }
</style>