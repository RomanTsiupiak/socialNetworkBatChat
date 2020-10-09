import React from "react";
import {Link} from "react-router-dom";
import classes from './dialogItem.module.css'

const DialogItem = (props) => {

    let l = '/dialogs/'+props.link;

    return (
        <div className={classes.message}>
            <img src={props.icon}/>
            <Link to={l} activeClassName={classes.active}>{props.username}</Link>
        </div>
    );
}

export default DialogItem;