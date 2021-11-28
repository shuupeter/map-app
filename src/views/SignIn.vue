<template>

<v-container>
  <v-card
    class="mx-auto"
    style="max-width: 500px;"
  >
  <v-form
      ref="form"
      class="pa-4 pt-6"
      @submit.prevent="signInUser()"
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
        ログイン
      </v-card-text>
      <v-btn text 
        :disabled="!Checked"
        class="font-weight-bold white--text"
        color="white--text"
        type="submit"
      >
        ログインする
      </v-btn>
    </v-toolbar>

      <v-text-field
        v-model="email"
        :rules="[rules.required]"
        filled
        color="blue darken-1"
        label="メールアドレス*"
        style="min-height: 96px"
        class="mt-10"
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
    </v-form>
  </v-card>
</v-container>
</template>


<script>
import app from '../plugins/db.js'
import { getAuth , onAuthStateChanged , signInWithEmailAndPassword } from "firebase/auth"
//import { getAuth } from "firebase/auth"

  export default {
    name:'ItemRegistration',
    data: () => ({
      email:'',
      password:'',
      rules: {
          length: len => v => (v || '').length >= len || `${len}文字以上で入力してください`,
          required: v => !!v || '必須項目です',
        },
    }),
    computed: {
      Checked() {
        return this.email && this.password.length >= 6 ;
      }
    },
    methods: {
      signInUser() {
        const auth = getAuth(app)
        signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log('user login')
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          alert(error.message)
          console.error(error)
        })
      }
    },
    mounted(){
    const auth = getAuth(app)
    onAuthStateChanged(auth,function(user) {
    if (user) {
      const uid = user.uid
      console.log(uid);
    } else {
      console.log('logout');
    }
    });     
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