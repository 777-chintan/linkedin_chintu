import { Avatar } from '@material-ui/core'
import React from 'react'
import "../stylesheet/SideBar.css"
import back from "../images/back.jpg"
import profile from "../images/mine.jpg"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function SideBar() {
    
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentitem">
            <p className="sidebar__hash">#</p>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            {/* top */}
            <div className="sidebar__top">
                <img src={back} alt=""/>
                <Avatar  className="sidebar__avatar" src={user.photoUrl}>{user?.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">1,256</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on your post</p>
                    <p className="sidebar_statNumber">1,256</p>
                </div>
            </div>
            
            {/* bottom */}
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactJS")}
                {recentItem("JavaScript")}
                {recentItem("Firebase")}
                {recentItem("C++")}
                {recentItem("taiwind_CSS")}
            </div>

        </div>
    )
}

export default SideBar
