import React from "react";
const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_NEW_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push({id: '4', massage: body});
            state.newMessageBody = ' ';
            return state;
        default: return state;

    }
}

export const sentNewMessageCreateAction = () => ({type: SEND_NEW_MESSAGE});
export const updateMessageBodyCreateAction = (text) => ({type: UPDATE_MESSAGE_BODY, body: text});
export default dialogsReducer;