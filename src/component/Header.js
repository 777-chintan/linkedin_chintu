import React from 'react';
import "../stylesheet/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from '../Firebase';
import { useDispatch } from 'react-redux';
import { logout } from "../features/userSlice";

function Header() {

    const dispatch = useDispatch();

    const signOut = () =>{
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className="header">
            {/* left side */}
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
                
            </div>
            {/* right side */}
            <div className="header__right">
                <HeaderOption title="Home" Icon={HomeRoundedIcon}/>
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption title="Messagng" Icon={ChatIcon}/>
                <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
                <HeaderOption title="me" avatar={true} onclick={signOut} />
            </div>
        </div>

    )
}

export default Header;
