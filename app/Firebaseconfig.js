 // Import the functions you need from the SDKs you need
 
 import firebase from "firebase/compat/app";
 import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDL1wrtROG4L5gLmGYt0Dz3LcGE-i_aEXU",
  authDomain: "smartirrigation-65e59.firebaseapp.com",
  projectId: "smartirrigation-65e59",
  storageBucket: "smartirrigation-65e59.appspot.com",
  messagingSenderId: "100542112334",
  appId: "1:100542112334:web:c096ea8fea98416fc6191f"
};

// Initialize Firebase
 if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
 }

 export const auth = firebase.auth();