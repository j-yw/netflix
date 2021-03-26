import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDmVwdX7isH9U7n244M1udGOWIRdPu66pc",
  authDomain: "netflix-4ebbd.firebaseapp.com",
  projectId: "netflix-4ebbd",
  storageBucket: "netflix-4ebbd.appspot.com",
  messagingSenderId: "7636101288",
  appId: "1:7636101288:web:3ab262830ae43ffd01ba9d",
};

export const firebase = Firebase.initializeApp(config);
