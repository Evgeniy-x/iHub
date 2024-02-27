import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJKXVIBNyhRRnrrCOz1YsJY34TRGnNGoo",
  authDomain: "test-ihub-10c46.firebaseapp.com",
  projectId: "test-ihub-10c46",
  storageBucket: "test-ihub-10c46.appspot.com",
  messagingSenderId: "2545582400",
  appId: "1:2545582400:web:05e712472cc34b6d1fbaa5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
