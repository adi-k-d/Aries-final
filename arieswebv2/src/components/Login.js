import React, { useState } from "react"
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"
import { auth, provider, db } from "../firebase"

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
  const signInWithGoogle = (e) => {
    e.preventDefault()
    signInWithPopup(auth, provider)
      .then((result) => {
        const newUser = {
          fullname: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
          type: "Patient",
        }
        navigate("/")
        setUser(newUser)
        localStorage.setItem("user", JSON.stringify(newUser))
      })
      .catch((err) => alert(err.message))
  }
  const signInWithEmail = (e) => {
    e.preventDefault()
    setRegisterEmail(formData.user.email)
    setRegisterPassword(formData.user.password)
    let email = registerEmail
    let password = registerPassword

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        const newUser = {
          fullname: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          type: "Patient",
        }
        navigate("/")
        setUser(newUser)
        localStorage.setItem("user", JSON.stringify(newUser))
      })
      .catch((err) => alert(err.message))
  }

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
                className={
                  "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                }
                value="emailLogin"
                onClick={signInWithEmail}
              >
                Sign in
              </button>
              <button
                className={
                  "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                }
                value="googleLogin"
                onClick={signInWithGoogle}
              >
                Sign In With Google
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
