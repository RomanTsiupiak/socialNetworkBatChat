import React from "react";
const NEW_POST = 'NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case NEW_POST:
            let post = {
                id: 3,
                photo: 'https://www.maxim.com/.image/t_share/MTY3ODU5OTMxNjgzMjM1MDg5/margot-robbie-harley-1.jpg',
                message: state.newPostText,
            }
            state.posts.push(post);
            state.newPostText = '';
            return state;

        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }
}

export const newPostCreateAction = () => ({type: NEW_POST});
export const updatePostTextCreateAction = (text) => ({type: UPDATE_POST_TEXT, newText: text});

export default profileReducer;