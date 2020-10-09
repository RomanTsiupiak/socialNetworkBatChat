import React from "react";
import classes from './post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.photo}/>
            {props.message}
        </div>
    );
}
export default Post;