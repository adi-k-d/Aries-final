import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import React, { useState, useEffect, useContext } from "react"
import Login from "./components/Login"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase"
import Chat from "./components/Chat"
import Signup from "./components/Signup"

function App() {
  const [currUser, setCurrUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null)
        localStorage.removeItem("user")
      })
      .catch((err) => alert(err.message))
  }

  return (
    <Router>
      {user ? (
        <Routes>
          <Route
            path="/"
            element={<Home currentUser={user} signOut={signOut} />}
          />
          <Route
            path="/chat"
            element={<Chat currentUser={user} signOut={signOut} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/Signup" element={<Signup setUser={setUser} />} />
          <Route path="/" element={<Login setUser={setUser} />} />
        </Routes>
      )}
    </Router>
  )
}

export default App
