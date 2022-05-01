import React, { useState } from "react"
import { useAuth } from "../context/AuthContext"

import { useNavigate } from "react-router-dom"

export default function Login({ setUser }) {
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [formData, setFormData] = useState({
    user: {
      email: "",
      password: "",
    },
  })

  const handleChange = (e) => {
    setFormData({
      user: {
        ...formData.user,
        [e.target.name]: e.target.value,
      },
    })
  }

  const navigate = useNavigate()

  const { currentUser } = useAuth()

  // const signInWithGoogle = (e) => {
  //   e.preventDefault()
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const newUser = {
  //         fullname: result.user.displayName,
  //         email: result.user.email,
  //         photoURL: result.user.photoURL,
  //         type: "Patient",
  //       }
  //       navigate("/")
  //       setUser(newUser)
  //       localStorage.setItem("user", JSON.stringify(newUser))
  //     })
  //     .catch((err) => alert(err.message))
  // }
  // const signInWithEmail = (e) => {
  //   e.preventDefault()
  //   setRegisterEmail(formData.user.email)
  //   setRegisterPassword(formData.user.password)
  //   let email = registerEmail
  //   let password = registerPassword

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user
  //       const newUser = {
  //         fullname: user.displayName,
  //         email: user.email,
  //         photoURL: user.photoURL,
  //         type: "Patient",
  //       }
  //       navigate("/")
  //       setUser(newUser)
  //       localStorage.setItem("user", JSON.stringify(newUser))
  //     })
  //     .catch((err) => alert(err.message))
  // }

  const nav = () => {
    navigate("/signup")
  }

  return (
    <figure className="h-screen flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        <blockquote className="text-2xl font-medium text-center">
          <p className="text-lg font-semibold">Welcome to Aries Online</p>
        </blockquote>

        <div className="text-primary m-6">
          <div className="flex items-center mt-3 justify-center">
            <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
              Please Sign In
            </h1>
          </div>
          <form>
            <label className="text-left">Email:</label>
            <input
              name="email"
              type="text"
              value={formData.user.email}
              onChange={handleChange}
              placeholder="Username"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <label>Password:</label>
            <input
              name="password"
              type="password"
              value={formData.user.password}
              onChange={handleChange}
              placeholder="Password"
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              }
            />
            <div className="flex items-center mt-3 justify-center">
              <button
                className="py-2 px-4 flex justify-center items-center  bg-blue-700 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                value="emailLogin"
                // onClick={signInWithEmail}
              >
                Sign in With Email
              </button>

              <button
                type="button"
                className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                // onClick={signInWithGoogle}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                </svg>
                Sign in with Google
              </button>
            </div>
          </form>
          <div className="flex items-center mt-3 justify-center">
            <button
              className={"justify-center text-blue-500 hover:underline"}
              onClick={nav}
            >
              Dont have an account?Please Sign Up!
            </button>
          </div>
        </div>
      </div>
    </figure>
  )
}
