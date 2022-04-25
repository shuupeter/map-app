<template>
  <v-container>
    <v-card
      class =  "mx-auto"
      style =  "max-width : 500px"
    >
      <v-form
        ref =  "form"
        class =  "pa-4 pt-6"
        @submit.prevent ="signInUser()"
      >
        <v-toolbar
          color="blue darken-1"
          cards
          dark
          flat
        > 
          <router-link to = "/">
            <v-btn icon>
              <v-icon> mdi-arrow-left </v-icon>
            </v-btn>
          </router-link>
            <v-card-text class = "text-h6 font-weight-bold text-center">
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
          v-model ="email"
          :rules ="[rules.required]"
          filled
          color =  "blue darken-1"
          label =  "メールアドレス*"
          style =  "min-height: 96px"
          class =  "mt-10"
        ></v-text-field>
        <v-text-field
          ref = "password"
          v-model ="password"
          :rules="[rules.required,rules.length(7)]"
          filled
          color =  "blue darken-1"
          counter = "7"
          label = "パスワード*"
          style = "min-height: 96px"
          placeholder = "7文字以上で入力してください"
        ></v-text-field>
      </v-form>
    
      <router-link to = "/signup">
        <v-card-actions>
          <v-btn
            color = "blue accent-4"
            class = "mx-auto"
            text
          >
            新規登録
          </v-btn>
        </v-card-actions>
      </router-link>
    </v-card>
  </v-container>
</template>


<script>
import app from '../plugins/db.js'
import { getAuth , signInWithEmailAndPassword } from "firebase/auth"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export default {
  name: 'SighIn',
  data: () => ({
    email: '',
    password: '',
    rules: {
      length: len => v => (v || '').length >= len || `${len}文字以上で入力してください`,
      required: v => !!v || '必須項目です',
    },
  }),
  computed: {
    Checked() {
      return this.email && this.password.length >= 7 ;
    }
  },
  methods: {
    signInUser() {
      const auth = getAuth(app)
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then(async(userCredential) => {
        console.log(userCredential)
        this.$store.commit('updateIdToken', userCredential._tokenResponse.idToken);
        const db = getFirestore(app)
        const q = query(collection(db, "users"), where("uid", "==", userCredential.user.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          this.$store.commit('setdocId', doc.id);
          this.$store.commit('setUserName', doc.data().username);
          this.$store.commit('setUserUid', doc.data().uid);
          this.$store.commit('uploadFile', doc.data().item);
        });
        this.$router.push('/mypage');
      })
      .catch((error) => {
        alert(error.message)
        console.error(error)
      })
    }
  },
}
</script>


<style scoped>
  a {
    text-decoration: none;
  }
</style>