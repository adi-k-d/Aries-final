import React from "react"
import { useState, useEffect } from "react"
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
  query,
  where,
  getDoc,
} from "firebase/firestore"
import { db } from "../firebase"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
function Chatheader() {
  const { currentUser, room } = useAuth()

  const [question, setQuestion] = useState()

  const navigate = useNavigate()
  console.log(room)

  // if (room == null) {
  //   navigate("/questions")
  // }
  // const docRef = doc(db, "questions", room)
  // const questions = async () => {
  //   const docSnap = await getDoc(docRef)

  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data())
  //   } else {
  //     // doc.data() will be undefined in this caseroom
  //     console.log("No such document!")
  //   }
  // }

  // useEffect(() => {
  //   const q = query(collection(db, "questions", room))
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     if (snapshot.docs.length) {
  //       const question = snapshot.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }))
  //       setQuestion(
  //         snapshot.docs.map((doc) => ({
  //           ...doc.data(),
  //           id: doc.id,
  //         }))
  //       )
  //     }
  //   })
  //   return () => unsubscribe()
  // }, [])

  return (
    <div className="relative flex items-center p-3 border-b border-gray-300">
      <img
        className="object-cover w-10 h-10 rounded-full"
        src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
        alt="username"
      />
      <span className="block ml-2 font-bold text-gray-600">
        {currentUser.email}
      </span>
      <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
      <div></div>
    </div>
  )
}

export default Chatheader
