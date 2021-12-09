<template>

<v-container>
  <v-card
    class="mx-auto"
    style="max-width: 500px;"
  >
  <v-form
      ref="form"
      class="pa-4 pt-6"
      @submit.prevent="registerUser()"
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
      <v-btn text 
        :disabled="!Checked"
        class="font-weight-bold white--text"
        color="white--text"
        type="submit"
      >
        登録する
      </v-btn>
    </v-toolbar>

    
      <v-text-field
        v-model="name"
        :rules="[rules.required]"
        filled
        color="blue darken-1"
        label="ユーザー名*"
        style="min-height: 96px"
        class="mt-10"
      ></v-text-field>
      <v-text-field
        v-model="email"
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
        placeholder="6文字以上で入力してください"
      ></v-text-field>
    </v-form>
    <router-link to="/signin">
    <v-card-actions>
      <v-btn
        color="blue accent-4"
        class="mx-auto"
        text
      >
        ログインページへ移動
      </v-btn>
    </v-card-actions>
    </router-link>
  </v-card>
</v-container>
</template>



<script>
import app from '../plugins/db.js'
import { getAuth , createUserWithEmailAndPassword , onAuthStateChanged , updateProfile } from "firebase/auth"
import { getFirestore, collection, addDoc } from "firebase/firestore";

  export default {
    name:'ItemRegistration',
    data: () => ({
      name:'',
      email:'',
      password:'',
      confirmationPassword:'',
      rules: {
          length: len => v => (v || '').length >= len || `${len}文字以上で入力してください`,
          required: v => !!v || '必須項目です',
        },
    }),
    computed: {
      Checked() {
        return this.name && this.email && this.password.length >= 6 && this.confirmationPassword.length >= 6;
      }
    },
    methods: {
      registerUser() {
        const auth = getAuth(app)
        createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential)
          const user = userCredential.user;
          this.$store.commit('updateIdToken', userCredential._tokenResponse.idToken)
          this.$store.commit('setUserUid', user.uid)
          console.log(this.$store.state.userUid)
          this.$router.push('/mypage');
          console.log('user created')
          const uid = user.uid;
          const userInitialData = {
            email: this.email,
            uid: uid,
            username: this.name
          }

          const db = getFirestore(app)
          addDoc (collection(db, "users"), userInitialData);

          this.email = "";
          this.password = "";
          this.name = "";
          this.confirmationPassword = "";
        })
        .catch((error) => {
          alert(error.message)
          console.error(error)
        })
      },
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
    },

    updated(){
        const auth = getAuth(app)
        updateProfile(auth.currentUser, {
            displayName : this.name
        })
        this.$store.commit('setUserName', auth.currentUser.displayName)
        console.log(this.$store.state.userName)
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