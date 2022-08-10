import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkKOMVw-yyXoVRXwaEpMo11mPJVzWXnhQ",
  authDomain: "blog-site-192d4.firebaseapp.com",
  projectId: "blog-site-192d4",
  storageBucket: "blog-site-192d4.appspot.com",
  messagingSenderId: "975276323956",
  appId: "1:975276323956:web:a4b2aba7aba5ae5c830d21",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
