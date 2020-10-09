import React from "react";
import classes from './myPost.module.css';
import Post from "./post/post";

const MyPost = (props) => {
    let postElement = props.posts.map((post) => <Post message={post.message} photo={post.photo}/>);

    let textPostElement =React.createRef();

    let onTextChange = () => {
        let text = textPostElement.current.value;
        props.updatePostText(text);
    }


    let addPost = () => {
        props.addPost();
    }

    return (
        <div className={classes.item}>
            <h3 className={classes.title}>Posts</h3>
            <div className={classes.newpost}>
                <textarea onChange={onTextChange}
                          ref={textPostElement}
                          value={props.newPostText}/>
            </div>

            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            {postElement}
        </div>
    );
}

export default MyPost;