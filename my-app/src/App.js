import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/Content/News/News";
import Settings from "./Components/Content/Settings/Settings";
import Login from "./Components/Login/Login";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./Components/Content/Users/UsersContainer";
import ProfileContainer from "./Components/Content/Profile/ProfileContainer";
import DialogsContainer from "./Components/Content/Dialogs/DialogsContainer";

function App(props) {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="content">
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />}/>
            <Route path="/users" render={() => <UsersContainer />}/>
            <Route path="/news" component={News} />
            <Route path="/settings" component={Settings} />
            <Route path={"/login"} component={Login} />
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
