import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAndw4aPEMlYotuSDYf1zwOndPC5CsZxxM",
  authDomain: "slack-clone-scribe.firebaseapp.com",
  projectId: "slack-clone-scribe",
  storageBucket: "slack-clone-scribe.appspot.com",
  messagingSenderId: "31000604056",
  appId: "1:31000604056:web:8dd1d56e804060e510cfed",
  measurementId: "G-B7HETMS3KP",
};
// Initialize Firebasez
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
