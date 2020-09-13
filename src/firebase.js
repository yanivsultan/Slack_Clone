import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7HXB3iKFX0hCktVW5mypwlgwTEQC-Wsg",
  authDomain: "slack-clone-ef468.firebaseapp.com",
  databaseURL: "https://slack-clone-ef468.firebaseio.com",
  projectId: "slack-clone-ef468",
  storageBucket: "slack-clone-ef468.appspot.com",
  messagingSenderId: "752672551656",
  appId: "1:752672551656:web:da657eed2fcf38c9488f5d",
  measurementId: "G-97QBV6L84T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider};
export default db;
