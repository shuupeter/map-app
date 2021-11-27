<template>

<v-container>
  <v-card
    class="mx-auto"
    style="max-width: 500px;"
  >

    <v-toolbar
      color="blue darken-1"
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
        新規登録
      </v-card-text>
      <v-spacer></v-spacer>
      <v-btn text 
        :disabled="!Checked"
        :loading="isLoading"
        class="font-weight-bold white--text"
        color="white--text"
        @click="InputBox(e)"
      >
        登録する
      </v-btn>
    </v-toolbar>

    <v-form
      ref="form"
      v-model="form"
      class="pa-4 pt-6"
    >
      <v-text-field
        v-model="name"
        :rules="[rules.required]"
        filled
        color="blue darken-1"
        label="ユーザー名*"
        style="min-height: 96px"
      ></v-text-field>
      <v-text-field
        v-model="address"
        :rules="[rules.required]"
        filled
        color="blue darken-1"
        label="メールアドレス*"
        style="min-height: 96px"
      ></v-text-field>
      <v-text-field
        ref="password"
        v-model="password"
        :rules="[rules.required,rules.length(6)]"
        filled
        color="blue darken-1"
        counter="6"
        label="パスワード*"
        style="min-height: 96px"
        placeholder="6文字以上で入力してください"
      ></v-text-field>
      <v-text-field
        ref="confirmationPassword"
        v-model="confirmationPassword"
        :rules="[rules.required,rules.length(6)]"
        filled
        color="blue darken-1"
        counter="6"
        label="確認用パスワード*"
        style="min-height: 96px"
        placeholder="6文字以上で入力してください"
      ></v-text-field>
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
          length: len => v => (v || '').length >= len || `${len}文字以上で入力してください`,
          required: v => !!v || '必須項目です',
        },
    }),
    computed: {
      Checked() {
        return this.name && this.shop && this.myCroppa.generateDataUrl();
      },
    methods:  {
      InputBox(e) {
        console.log(e);
      }
    }
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