import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Content from "./components/content/content";
import Space from "./components/space/space";
import Dialogs from "./components/dialogs/dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/news/news";

debugger;

function App(props) {
  return (
          <div className='head'>
              <Header/>
              <Nav icon={props.icon}/>
              <div className='dialogs'>
                  <Route path='/dialogs'
                         render={() => <Dialogs dialogs={props.appState.dialogsPage.dialogs}
                                                messages={props.appState.dialogsPage.messages}/>}/>
                  <Route path='/content'
                         render={() => <Content posts={props.appState.contentPage.posts}
                                                addPost={props.addPost}
                                                newPostText={props.appState.contentPage.newPostText}
                                                updatePostText={props.updatePostText}/>}/>
                  <Route path='/news' component={News}/>
              </div>

              <Space/>
          </div>
  );
}

export default App;
