import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Content from "./components/content/content";
import Space from "./components/space/space";
import Dialogs from "./components/dialogs/dialogs";
import {Route} from 'react-router-dom';
import News from "./components/news/news";

function App(props) {
  return (
          <div className='head'>
              <Header/>
              <Nav icon={props.icon}/>
              <div className='dialogs'>
                  <Route path='/dialogs'
                         render={() => <Dialogs dialogs={props.appState.dialogsPage.dialogs}
                                                messages={props.appState.dialogsPage.messages}
                                                dispatch={props.dispatch} />}/>
                  <Route path='/content'
                         render={() => <Content posts={props.appState.contentPage.posts}
                                                newPostText={props.appState.contentPage.newPostText}
                                                dispatch={props.dispatch} />}/>
                  <Route path='/news' component={News}/>
              </div>

              <Space/>
          </div>
  );
}

export default App;
