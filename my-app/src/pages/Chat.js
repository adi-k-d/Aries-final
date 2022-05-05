import ChatContainer from "../components/ChatContainer"
import Chatheader from "../components/Chatheader"
import Appbar from "../components/Appbar"
import ChatInput from "../components/ChatInput"
import React from "react"
import { useAuth } from "../context/AuthContext"

function Chat() {
  const { currentUser, room, setRoom } = useAuth()
  console.log(currentUser)
  return (
    <div className="container w-full max-w-2xl m-auto h-full ">
      <Appbar />
      <div className="max-w-2xl border rounded ">
        <div className="w-full ">
          <Chatheader />
          <ChatContainer />
          <ChatInput />
        </div>
      </div>
    </div>
  )
}

export default Chat
