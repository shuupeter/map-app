<template>
  <div class="about">
    <h1></h1>
    <v-btn
      @click={login}
      elevation="2"
    >login</v-btn>
  </div>
</template>

<script>
import auth from "../plugins/db"
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  methods: {
    login() {
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
