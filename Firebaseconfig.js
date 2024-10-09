 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 import { initializeAuth, getReactNativePersistence } from "firebase/auth";
 

 import AsyncStorage from "@react-native-async-storage/async-storage";

 const firebaseConfig = {
   apiKey: "AIzaSyDL1wrtROG4L5gLmGYt0Dz3LcGE-i_aEXU",
   authDomain: "smartirrigation-65e59.firebaseapp.com",
   projectId: "smartirrigation-65e59",
   storageBucket: "smartirrigation-65e59.appspot.com",
   messagingSenderId: "100542112334",
   appId: "1:100542112334:web:c096ea8fea98416fc6191f",
 };

 const app = initializeApp(firebaseConfig);
 const firestore = getFirestore(app);

 // Initialize Firebase Auth with React Native AsyncStorage
 const auth = initializeAuth(app, {
   persistence: getReactNativePersistence(AsyncStorage),
 });

 export { app, firestore, auth };
