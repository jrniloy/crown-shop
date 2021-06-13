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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // console.log(firestore.doc("users/53s4fgs354gvs"));

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // set user object to database
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
