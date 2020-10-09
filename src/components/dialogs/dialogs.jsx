import React from "react";
import classes from './dialogs.module.css';
import DialogItem from "./dialogItem/dialogItem";
import Message from "./message/massage";

const Dialogs = (props) => {
    let dialogElement = props.dialogs
        .map((dialog) => <DialogItem link ={dialog.id} username ={dialog.name} icon={dialog.icon}/>);

    let messageElement = props.messages.
        map((message) => <Message message={message.massage}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog}>
                    {dialogElement}
                </div>

            </div>

            <div className={classes.messages}>
                {messageElement}
            </div>

        </div>
    );
}

export default Dialogs;