import React, { useState } from 'react';
import { login } from '../features/userSlice';
import { auth } from '../Firebase';
import "../stylesheet/Login.css";
import { useDispatch } from 'react-redux';

function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilepic, setProflePic] = useState("");
    const dispatch = useDispatch();

    const loginIntoApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then( (userAuth) => {
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL
                })
            );
        })
        .catch( (error) => {alert(error.message)} );

    };
    
    const register = (e) => {
        if(!name){
            return alert("please enter full name");
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user
            .updateProfile({
                displayName : name,
                photoURL : profilepic
            })
            .then(()=>{
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName:userAuth.user.displayName,
                        photoUrl: userAuth.user.photoURL
                    })
                );
            });
        })
        .catch((error) => {alert(error.message)});
    };

    return (
        <div className="login">
            <div className="logo">
                <p>Linked</p>
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
            </div>
            <form className="form">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name (Required if registering)" />
                <input type="text" value={profilepic} onChange={ (e) => setProflePic(e.target.value) } placeholder="Photourl (Optional)"/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email ID"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                <button type="submit" onClick={loginIntoApp}>Sign in</button>
            </form>
            <p>New to LinkedIn? 
                <span className="login__register" onClick={register}>Register Now</span>
            </p>

        </div>
    )
}

export default Login
