import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {setUserProfile} from "../../../redux/profile-reducer";
import * as axios from "axios";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 3;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
};

const ProfileContainerWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithUrlData)
