import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"
import { getStorage } from "firebase/storage"
import { initializeFirestore } from "firebase/firestore"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCLxlA3iphFWDV1PM6WzYfQfz4pwUIOscQ",
  authDomain: "aries-app-c0da0.firebaseapp.com",
  projectId: "aries-app-c0da0",
  storageBucket: "aries-app-c0da0.appspot.com",
  messagingSenderId: "334267525968",
  appId: "1:334267525968:web:4bc3f2e6c188493add9a55",
  measurementId: "G-2WC3T1F65B",
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
})

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}
