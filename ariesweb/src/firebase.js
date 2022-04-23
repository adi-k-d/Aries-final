import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD3ZD5OMOW-h51LHtYMPAdEDRywaL1a6u4",
  authDomain: "aries-9e2f1.firebaseapp.com",
  projectId: "aries-9e2f1",
  storageBucket: "aries-9e2f1.appspot.com",
  messagingSenderId: "776573871824",
  appId: "1:776573871824:web:a2d7f0f080abd0640560d5",
  measurementId: "G-H5NX8R1F7F",
}

const app = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const db = app.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()

export { auth, googleProvider }

export default db
