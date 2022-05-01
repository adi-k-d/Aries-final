import React from "react"
import Questions from "./Questions"
import Chat from "./Chat"

function Chats() {
  return (
    <>
      <div className="container mx-auto">
        <Questions />
        <button
          type="button"
          className="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Ask Question
        </button>
      </div>
    </>
  )
}

export default Chats
