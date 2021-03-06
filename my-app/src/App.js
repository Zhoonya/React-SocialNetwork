import React, {lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/Content/News/News";
import Settings from "./Components/Content/Settings/Settings";
import Login from "./Components/Login/Login";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
// import UsersContainer from "./Components/Content/Users/UsersContainer";
import ProfileContainer from "./Components/Content/Profile/ProfileContainer";
// import DialogsContainer from "./Components/Content/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppThunkCreator} from "./redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./Components/Content/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./Components/Content/Users/UsersContainer"));

class App extends React.Component {

    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occured");
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    };

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    };

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        } else {
            return (
                <BrowserRouter>
                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <Navbar/>
                        <div className="content">
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                            {/*<Route path="/users" render={() => <UsersContainer/>}/>*/}
                            <Route path="/users" render={withSuspense(UsersContainer)}/>
                            <Route path="/news" component={News}/>
                            <Route path="/settings" component={Settings}/>
                            <Route path={"/login"} component={Login}/>
                        </div>
                    </div>
                </BrowserRouter>
            );
        }

    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
};

export default compose(
    withRouter,
    (connect(mapStateToProps, {initializeApp: initializeAppThunkCreator}))
)(App);
