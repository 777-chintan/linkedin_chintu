import React, { useState, useEffect } from 'react'
import "../stylesheet/Feed.css";
import EditIcon from '@material-ui/icons/Edit';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Post from './Post';
import { db } from "../Firebase.js";
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection("posts")
          .orderBy("timestamp","desc")
          .onSnapshot((snapshot)=> 
            setPosts(
                snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data(),
            })))
        );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name : user.displayName,
            description: user.email,
            message: input,
            photoURL : user.displayName[0] || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };

    return (
        <div className="feed">
            {/* input */}
            <div className="feed__inputcontainer">
                <div className="feed__input">
                    <EditIcon />
                    <form >
                        <input type="text" value={input} onChange={ e => setInput(e.target.value)} placeholder="Start a post"/>
                        <button type="submit" onClick={sendPost}> post</button>
                    </form>
                </div>
                <div className="feed__inputoptions">
                    {/* options */}
                    <InputOption Icon={ImageIcon} color="#86c5da" title="Photo"/>
                    <InputOption Icon={YouTubeIcon} color="#66cc00" title="Video"/>
                    <InputOption Icon={EventIcon} color="#cccc00" title="Event"/>
                    <InputOption Icon={AssignmentIcon} color="#ff99cc" title="Write article"/>
                </div>
            </div>

            {/* posts */}
            <FlipMove>
            {posts.map(({id , data:{name, description,message,photoURL}}) =>
                (<Post key={id} name={name} url={photoURL} description={description} message={message}/>
            ))}
            </FlipMove>
        </div>
    )
}

export default Feed
