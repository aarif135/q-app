import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD6YcpH8YJEJIcYFz96RXwbvEKhhpeHDjg",
  authDomain: "app-9b871.firebaseapp.com",
  databaseURL: "https://app-9b871.firebaseio.com",
  projectId: "app-9b871",
  storageBucket: "app-9b871.appspot.com",
  messagingSenderId: "96192709911",
  appId: "1:96192709911:web:4472452a0e736e9bd8a352",
  measurementId: "G-9JTHLSDS31"
};
firebase.initializeApp(firebaseConfig);
async function LoginWithFacebook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  let result = await firebase.auth().signInWithPopup(provider);
  let user = result.user;
  console.log(user);
  const db = firebase.firestore();
  const TempUser = {
    name: user.displayName,
    email: user.email,
    photoUrl: user.photoURL,
    uId: user.uid
  };
  db.collection('userData').doc(user.uid).set(TempUser)
}
export { LoginWithFacebook };
