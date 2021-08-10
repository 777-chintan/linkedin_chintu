import React from 'react'
import "../stylesheet/HeaderOption.css"
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function HeaderOption({avatar, Icon, title , onclick}) {

    const user= useSelector(selectUser);

    return (
        <div className="headeroption" onClick={onclick}>
            {Icon &&  <Icon className="headeroption__icon"/>}
            {avatar && <Avatar className="headeroption__icon">{user?.email[0]}</Avatar> }
            <p>{title}</p>
        </div>
    )
}

export default HeaderOption
