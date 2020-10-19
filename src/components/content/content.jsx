import React from "react";
import classes from './content.module.css';
import MyPost from "./myPost/myPost";

const Content = (props) => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://i2.rozetka.ua/goods/12807510/101078977_images_12807510529.jpg'/>
                <h4>Joker</h4>
            </div>
            <MyPost posts={props.posts}
                    newPostText={props.newPostText}
                    dispatch={props.dispatch}/>
        </div>
    );
}

export default Content;