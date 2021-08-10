import React from 'react';
import './App.css';
import Feed from './component/Feed';
import Header from './component/Header';
import SideBar from './component/SideBar';
import { useSelector } from "react-redux"; 
import { login, logout, selectUser } from './features/userSlice';
import Login from './component/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {auth} from "./Firebase"
import Widgets from './component/Widgets';


function App() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        );
      }
      else{
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      
      {/* Header */}
      <Header />
      
      {/* Body */}      
      {!user ? (<Login />) : (
        <div className="app__body">
          {/* side bar */}
          <SideBar />
          {/* post/feed */}
          <Feed />
          {/* right side/widgets */}
          <Widgets />
        </div>
      )}

    </div>
  );
}

export default App;
