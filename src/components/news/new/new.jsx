import React from "react";
import classes from './new.module.css';

const New = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.photo}/>
            <div className={classes.text}>
                {props.message}
            </div>
        </div>

    );
}
export default New;