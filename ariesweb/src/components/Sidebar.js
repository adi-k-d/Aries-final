import React, { useEffect, useState } from "react"
import TollIcon from "@mui/icons-material/Toll"
import InsertCommentIcon from "@mui/icons-material/InsertComment"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import SearchIcon from "@mui/icons-material/Search"
import "./Sidebar.css"
import UserProfile from "./UserProfile"
import db from "../firebase"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-img">
          <img src="./user.png" alt="" />
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
            // value={searchInput}
            // onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>

      <div className="sidebar-chat-list">
        {/* {searchItem.length > 0
          ? searchItem
          : friendList.map((friend) => (
              <UserProfile
                name={friend.data().fullname}
                photoURL={friend.data().photoURL}
                lastMessage={friend.data().lastMessage}
                email={friend.data().email}
              />
            ))} */}
        <UserProfile />
      </div>
    </div>
  )
}

export default Sidebar
