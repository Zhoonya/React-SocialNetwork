import React from "react";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import Profile from "./Profile";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    updateStatusThunkCreator
} from "../../../redux/profile-reducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    };
};

export default compose(connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator, getStatus: getStatusThunkCreator, updateStatus: updateStatusThunkCreator}),
                        withRouter,
                        withAuthRedirect)(ProfileContainer);
