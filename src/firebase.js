import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyCEW6zSo1Jf82fmbNfBqeCKgCdOZFw1yo4",
    authDomain: "whats-clone-2e62f.firebaseapp.com",
    projectId: "whats-clone-2e62f",
    storageBucket: "whats-clone-2e62f.appspot.com",
    messagingSenderId: "262959748310",
    appId: "1:262959748310:web:979f37d629ec730630e577"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db;

