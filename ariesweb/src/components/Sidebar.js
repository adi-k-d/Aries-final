import React, { useEffect, useState } from "react"
import TollIcon from "@mui/icons-material/Toll"
import InsertCommentIcon from "@mui/icons-material/InsertComment"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import SearchIcon from "@mui/icons-material/Search"
import "./Sidebar.css"
import UserProfile from "./UserProfile"
import db from "../firebase"

function Sidebar({ currentUser, signOut }) {
  const [allUsers, setAllUsers] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [doctorList, setdoctorList] = useState([])
  const [questionlist, setquestionlist] = useState([])
  useEffect(() => {
    const getAllUsers = async () => {
      const data = await db.collection("users").onSnapshot((snapshot) => {
        setAllUsers(
          snapshot.docs.filter((doc) => doc.data().email !== currentUser?.email)
        )
      })
    }

    const getdoctors = async () => {
      const data = await db
        .collection("doctorlist")
        .doc(currentUser.email)
        .collection("list")
        .onSnapshot((snapshot) => {
          setdoctorList(snapshot.docs)
        })
    }

    getAllUsers()
    getdoctors()
  }, [])
  console.log(allUsers)

  const searchedUser = allUsers.filter((user) => {
    if (searchInput) {
      if (
        user.data().fullname.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return user
      }
    }
  })

  const searchItem = searchedUser.map((user) => {
    return (
      <UserProfile
        name={user.data().fullname}
        photoURL={user.data().photoURL}
        key={user.id}
        email={user.data().email}
      />
    )
  })

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-img">
          <img src={currentUser?.photoURL} alt="" onClick={signOut} />
        </div>
        <div className="sidebar-header-btn">
          <TollIcon />
          <InsertCommentIcon />
          <MoreVertIcon />
        </div>
      </div>

      <div className="sidebar-search">
        <div className="sidebar-search-input">
          <SearchIcon />
          <input
            type="text"
            name="search"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>

      <div className="sidebar-chat-list">
        <UserProfile name={"hi"} lastMessage={"hi"} email={"hi"} />
        {searchItem.length > 0
          ? searchItem
          : doctorList.map((doctor) => (
              <UserProfile
                name={doctor.data().fullname}
                photoURL={doctor.data().photoURL}
                lastMessage={doctor.data().lastMessage}
                email={doctor.data().email}
              />
            ))}
      </div>
    </div>
  )
}

export default Sidebar
