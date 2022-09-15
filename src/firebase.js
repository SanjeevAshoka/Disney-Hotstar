// import firebase from 'firebase';
// import {initializeApp} from 'firebase/app';
// import {auth} from 'firebase/auth';
// import 'firebase/compat/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDaA_o8mI4bNpmpsEq_D_-7X94R_02bYik",
    authDomain: "disney-hotstar-534e7.firebaseapp.com",
    projectId: "disney-hotstar-534e7",
    storageBucket: "disney-hotstar-534e7.appspot.com",
    messagingSenderId: "728620610330",
    appId: "1:728620610330:web:f3ff5e114f81d964fab2a3",
    measurementId: "G-80B1LB9JJG"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db  = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage()
//   const analytics = getAnalytics(app);

export { auth, provider, storage}
export default db;