import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFSQw9V_qgQR3P1gEq8o6RwZ1aR0yuUvc",
    authDomain: "slack-clone-2739b.firebaseapp.com",
    projectId: "slack-clone-2739b",
    storageBucket: "slack-clone-2739b.appspot.com",
    messagingSenderId: "988723765163",
    appId: "1:988723765163:web:f04ce56d49d1141746fcee",
    measurementId: "G-7E5MZMZDDQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db }