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

    <router-link to="/mypage">
      <v-btn icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </router-link>

      <v-card-text class="text-h6 font-weight-bold text-center">
        アイテム登録
      </v-card-text>
      <v-spacer></v-spacer>
      <v-btn text 
        :disabled="!Checked"
        class="font-weight-bold white--text"
        color="white--text"
      >
        完了
      </v-btn>
    </v-toolbar>

    <v-form
      ref="form"
      class="pa-4 pt-6"
    >
      <v-text-field
        v-model="name"
        :rules="[rules.required, rules.length(25)]"
        filled
        color="deep-purple"
        counter="25"
        label="買ったもの*"
        style="min-height: 96px"
        class="mt-8"
      ></v-text-field>
      <v-combobox
        ref="shop"
        v-model="shop"
        :rules="[rules.required, rules.length(20)]"
        :items="shops"
        filled
        color="deep-purple"
        counter="20"
        label="お店*"
        placeholder="選択肢にない場合は直接入力してください"
        style="min-height: 96px"
      ></v-combobox>
      <v-combobox
        ref="brand"
        v-model="brand"
        :rules="[rules.length(20)]"
        :items="brandShops"
        filled
        color="deep-purple"
        counter="20"
        label="ブランド"
        placeholder="選択肢にない場合は直接入力してください"
        style="min-height: 96px"
      ></v-combobox>
    
      <v-textarea
        v-model="introduction"
        :rules="[rules.length(100)]"
        counter="100"
        auto-grow
        filled
        color="deep-purple"
        label="紹介文"
        rows="2"
      ></v-textarea>
      <croppa v-model="myCroppa"
        :rules="[rules.required]"
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
        >  
      </croppa > 
    </v-form>
  </v-card>
</v-container>
</template>


<script>
// import { setDoc, doc } from "firebase/firestore";
// import { ref, uploadString, getDownloadURL, getStorage  } from "firebase/storage";
// import app from "./plugins/db.js";

  export default {
    name:'ItemRegistration',
    data: () => ({
      name:null,
      shops:['A店','B店'],
      shop:null,
      brandShops:['A','B'],
      brand:null,
      rules: {
          length: len => v => (v || '').length <= len || `${len}文字以内で入力してください`,
          required: v => !!v || '必須項目です',
        },
    }),
    computed: {
      Checked() {
        return this.name && this.shop && this.myCroppa.generateDataUrl();
      },
    }
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

a {
  text-decoration: none;
}
</style>