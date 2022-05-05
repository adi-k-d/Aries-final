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
  getDocs,
  serverTimestamp,
  orderBy,
} from "firebase/firestore"
import { db } from "../firebase"
import { useAuth } from "../context/AuthContext"

function ChatContainer() {
  const { currentUser, room, setRoom } = useAuth()
  const [messages, setmessages] = useState([])
  useEffect(() => {
    const msgRef = collection(db, "chats", room, "messages")
    const q = query(msgRef, orderBy("timestamp", "asc"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setmessages(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      )
    })
    return unsubscribe
  }, [room])
  console.log(messages)

  return (
    <div className="relative w-full p-6 overflow-y-auto h-[35rem]">
      {messages &&
        messages.map((message) => (
          <div key={message.id}>
            <ul className="space-y-2">
              {message.user === currentUser.email ? (
                <li class="flex justify-end">
                  <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                    <span class="block">{message.message}</span>
                  </div>
                </li>
              ) : (
                <li class="flex justify-start">
                  <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span class="block">{message.message}</span>
                  </div>
                </li>
              )}
            </ul>
          </div>
        ))}
    </div>
  )
}

export default ChatContainer
