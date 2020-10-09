import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {newPost} from "./redux/state";
import {updatePostText} from "./redux/state";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} addPost={newPost} updatePostText={updatePostText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}