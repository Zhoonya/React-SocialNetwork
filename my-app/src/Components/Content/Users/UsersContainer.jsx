import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {setCurrentPageActionCreator} from "../../../redux/users-reducer";

import {getUsersThunkCreator, unfollowThunkCreator, followThunkCreator} from "../../../redux/users-reducer";

class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageClick = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <div>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageClick={this.onPageClick}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       isFetching={this.props.isFetching}
                       followingInProgress={this.props.followingInProgress}/>
            </div>)

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (numberPage) => {
//             dispatch(setCurrentPageActionCreator(numberPage))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountActionCreator(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching))
//         }
//     }
// };

export default connect(mapStateToProps, {
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator,
    getUsers: getUsersThunkCreator,})(UsersContainer);


