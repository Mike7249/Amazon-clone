import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCcbdW8HZQn-iGXpkLeQnkfbG1z-5C4WCo",

  authDomain: "clone-c9231.firebaseapp.com",

  projectId: "clone-c9231",

  storageBucket: "clone-c9231.appspot.com",

  messagingSenderId: "853338820281",

  appId: "1:853338820281:web:d4f808cf3199d104129568",

  measurementId: "G-7NLZ3HF9W6",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
