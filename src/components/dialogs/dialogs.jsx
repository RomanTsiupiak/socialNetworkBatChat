import React from "react";
import classes from './dialogs.module.css';
import DialogItem from "./dialogItem/dialogItem";
import Message from "./message/massage";
import {sentNewMessageCreateAction, updateMessageBodyCreateAction} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    let dialogElement = props.dialogs
        .map((dialog) => <DialogItem link ={dialog.id} username ={dialog.name} icon={dialog.icon}/>);

    let messageElement = props.messages.
        map((message) => <Message message={message.massage}/>);

    let newMessageBody = React.createRef();

    let newMessageBodyChange = () => {
        let text = newMessageBody.current.value;
        props.dispatch(updateMessageBodyCreateAction(text));
        console.log(text);
    }

    let sentMessageOnClick = () => {
        props.dispatch(sentNewMessageCreateAction());
        newMessageBody.current.value ="";
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog}>
                    {dialogElement}
                </div>

            </div>

            <div className={classes.messages}>
                {messageElement}

                <div>
                    <div>
                        <textarea onChange={newMessageBodyChange} ref={newMessageBody}/>
                    </div>
                    <div>
                        <button onClick={sentMessageOnClick}>Send</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Dialogs;