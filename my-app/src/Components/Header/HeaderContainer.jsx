import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getUserDataThunkCreator, logoutThunkCreator} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};

export default connect(mapStateToProps, {getUserData: getUserDataThunkCreator, logout: logoutThunkCreator})(HeaderContainer);
