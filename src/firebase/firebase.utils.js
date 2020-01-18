import firebase, { initializeApp } from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCa18vuyNk6esOh7g2cX_wAkoEWRSF0j5M",
    authDomain: "parking-db-fef4d.firebaseapp.com",
    databaseURL: "https://parking-db-fef4d.firebaseio.com",
    projectId: "parking-db-fef4d",
    storageBucket: "parking-db-fef4d.appspot.com",
    messagingSenderId: "1002986787155",
    appId: "1:1002986787155:web:64e26428f171f0cda391a6",
    measurementId: "G-VFR3L93P0Z"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;