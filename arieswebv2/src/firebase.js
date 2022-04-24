import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth"
import { getStorage } from "firebase/storage"
import { initializeFirestore } from "firebase/firestore"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD3ZD5OMOW-h51LHtYMPAdEDRywaL1a6u4",
  authDomain: "aries-9e2f1.firebaseapp.com",
  projectId: "aries-9e2f1",
  storageBucket: "aries-9e2f1.appspot.com",
  messagingSenderId: "776573871824",
  appId: "1:776573871824:web:a2d7f0f080abd0640560d5",
  measurementId: "G-H5NX8R1F7F",
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()

export default { auth, storage, db, provider }
