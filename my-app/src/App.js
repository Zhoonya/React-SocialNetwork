import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Dialogs from "./Components/Content/Dialogs/Dialogs";
import News from "./Components/Content/News/News";
import Settings from "./Components/Content/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./Components/Content/Users/UsersContainer";
import ProfileContainer from "./Components/Content/Profile/ProfileContainer";

function App(props) {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="content">
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/dialogs" render={() => <Dialogs />}/>
            <Route path="/users" render={() => <UsersContainer />}/>
            <Route path="/news" component={News} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
