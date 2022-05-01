import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import Chat from "./components/Chat"
import React, { useState, useEffect, useContext } from "react"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { auth } from "./firebase"
import Chats from "./components/Chats"
import Questions from "./components/Questions"
import AuthContextProvider from "./context/AuthContext"
import { useAuth } from "./context/AuthContext"

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

  const { currentUser } = useAuth()
  console.log(currentUser)

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
    <AuthContextProvider>
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
            <Route
              path="/questions"
              element={<Questions currentUser={user} signOut={signOut} />}
            />
          </Routes>
        ) : (
          <Routes>
            <Route path="/signup" element={<Signup setUser={setUser} />} />
            <Route path="/" element={<Login setUser={setUser} />} />
          </Routes>
        )}
      </Router>
    </AuthContextProvider>
  )
}

export default App
