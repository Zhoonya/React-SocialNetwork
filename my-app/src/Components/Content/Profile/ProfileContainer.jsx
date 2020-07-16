import React from "react";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import Profile from "./Profile";
import {getUserProfileThunkCreator} from "../../../redux/profile-reducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 3;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
};

const ProfileContainerWithUrlData = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator})(ProfileContainerWithUrlData)
