<template>
  <div class="about">
    <h1></h1>
    <v-btn
      @click="login"
      elevation="2"
    >login</v-btn>
    <GetData />
    <ImageUpload />
  </div>
</template>

<script>
import app from "../plugins/db"
// import { getFireStore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth";
import GetData from "../components/GetData.vue"
import ImageUpload from "../views/ImageUpload.vue"


export default {
  components:{
    GetData,
    ImageUpload,
  },
  methods: {
    login() {
      const auth = getAuth(app)
      signInWithEmailAndPassword(auth, 'hykwshuhei@gmail.com', 'Vaga7326')
      .then((userCredential) => {
    // Signed in
        const user = userCredential.user;
        console.log(user);
    // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

      });
    }
  }
}
</script>
