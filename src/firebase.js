import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpkTdEJFuTVflLMLbKPWbjbg0Gjdn14tg",
  authDomain: "lhl-final-82e6c.firebaseapp.com",
  projectId: "lhl-final-82e6c",
  storageBucket: "lhl-final-82e6c.appspot.com",
  messagingSenderId: "917240882484",
  appId: "1:917240882484:web:24001d8d0e1d4a16273161"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };