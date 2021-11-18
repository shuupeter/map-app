import { initializeApp } from "firebase/app";
//mport { getAnalytics } from "firebase/analytics";
//import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAsfpZOarz-bjVy6oEJuPkQGaskfeaAJ3I",
  authDomain: "neat-tangent-33111.firebaseapp.com",
  projectId: "neat-tangent-33111",
  storageBucket: "neat-tangent-33111.appspot.com",
  messagingSenderId: "1018027335590",
  appId: "1:1018027335590:web:386ac6e93c89cffcf2b967",
  measurementId: "G-5G3VGDDY33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//import { initializeApp } from "firebase/app";
//const analytics = getAnalytics(app);
export default app;
