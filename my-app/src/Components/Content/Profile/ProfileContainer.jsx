import React from "react";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import Profile from "./Profile";
import {
    changePhotoThunkCreator,
    getStatusThunkCreator,
    getUserProfileThunkCreator, updateProfileDataThunkCreator,
    updateStatusThunkCreator
} from "../../../redux/profile-reducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this._refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this._refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} isOwner={!this.props.match.params.userId}/>
        )
    }

    _refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            // if (!userId){
            //     this.props.history.push("/login");
            // }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
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

export default compose(connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator,
                                                getStatus: getStatusThunkCreator,
                                                updateStatus: updateStatusThunkCreator,
                                                changePhoto: changePhotoThunkCreator,
                                                updateProfileData: updateProfileDataThunkCreator}),
                        withRouter,
                        withAuthRedirect)(ProfileContainer);
