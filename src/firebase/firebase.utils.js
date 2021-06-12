import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBMXqK50HKlZnZw4AsLY0q0mWIatANVHQA",
  authDomain: "jrniloy-crown-shop.firebaseapp.com",
  projectId: "jrniloy-crown-shop",
  storageBucket: "jrniloy-crown-shop.appspot.com",
  messagingSenderId: "650338501618",
  appId: "1:650338501618:web:8f8922d932d9fe9674a16b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
