import React, { useState } from "react"
import AskQuestion from "./AskQuestion"

function Home({ user }) {
  const currentuser = user
  const [showModal, setShowModal] = useState(false)

  const [usera, setUsera] = useState("hi")
  console.log(usera)

  console.log(user)
  return (
    <figure className="h-screen flex bg-gray-100">
      <div className="w-full max-w-2xl m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <blockquote className="text-2xl font-medium text-center">
          <p className="text-lg font-semibold">Welcome to Aries Online</p>
        </blockquote>
        <blockquote className="text-2xl font-medium text-center">
          {/* <p className="text-lg font-semibold">{usera}</p> */}
        </blockquote>
        <div className="bg-white dark:bg-gray-800 ">
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block">Do you have a Medical issue?</span>
              <span className="block text-indigo-500">
                Want to quickly get a second opinion?
              </span>
            </h2>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <button
                  type="button"
                  className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  // onClick={() => {
                  //   setUsera(JSON.parse(localStorage.getItem("user")))
                  // }}
                  onClick={() => setShowModal(true)}
                >
                  Ask A Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AskQuestion setShowModal={setShowModal} showModal={showModal} />
    </figure>
  )
}

export default Home
