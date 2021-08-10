import { Avatar } from '@material-ui/core'
import React,{ forwardRef } from 'react'
import "../stylesheet/Post.css"
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import InputOption from './InputOption';

export const Post = forwardRef(({name,url,description,message},ref) =>  {
    return (
        <div className="post" ref={ref}>
            <div className="post__header">
                <Avatar src={url}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__options">
                {/* post options */}
                <InputOption title="Like" Icon={ThumbUpAltIcon} />
                <InputOption title="Share" Icon={ShareIcon} />            
                <InputOption title="Comment" Icon={CommentIcon} />
                <InputOption title="Send" Icon={SendIcon} />
            </div>
        </div>
    )
});

export default Post;
