import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

const initialState = {
    users: [
        // {id: "1", name: "Angry Pirate", followed: false, location: {country: "Russia", city: "Cherepovets"}},
        // {id: "2", name: "Snow", followed: true, location: {country: "Russia", city: "Moscow"}},
        // {id: "3", name: "Orange Pig", followed: false, location: {country: "USA", city: "LA"}},
        // {id: "4", name: "Kesha", followed: true, location: {country: "Ukraine", city: "Kiev"}},
    ],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            const stateCopy = {
                ...state,
            };
            stateCopy.users = state.users.map((user) => {
                if (user.id === action.userId) {
                    return {...user, followed: true}
                }
                return user;
            });
            return stateCopy;
        }
        case UNFOLLOW: {
            const stateCopy = {
                ...state,
            };
            stateCopy.users = state.users.map((user) => {
                if (user.id === action.userId) {
                    return {...user, followed: false}
                }
                return user;
            });
            return stateCopy;
        }
        case SET_USERS: {
            const stateCopy = {
                ...state,
                users: [...action.users]
            };
            return stateCopy;
        }
        case SET_CURRENT_PAGE: {
            const stateCopy = {
                ...state,
                currentPage: action.currentPage
            };
            return stateCopy;
        }
        case SET_TOTAL_USERS_COUNT: {
            const stateCopy = {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
            return stateCopy;
        }
        case TOGGLE_IS_FETCHING: {
            const stateCopy = {
                ...state,
                isFetching: action.isFetching
            };
            return stateCopy;
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            const stateCopy = {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id != action.userId)
            };
            return stateCopy;
        }
        default:
            return state;
    }
};

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};

export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
};

export const setCurrentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};

export const setTotalUsersCountActionCreator = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
};

export const toggleIsFetchingActionCreator = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    }
};

export const toggleFollowingInProgressActionCreator = (isFetching, userId) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isFetching,
        userId
    }
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPageActionCreator(currentPage));
        dispatch(toggleIsFetchingActionCreator(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(toggleIsFetchingActionCreator(false));
                dispatch(setUsersActionCreator(data.items));
                dispatch(setTotalUsersCountActionCreator(data.totalCount));
            });
    };
};

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgressActionCreator(true, userId));
        usersAPI.follow(userId)
            .then((response) => {
                if (response.data.resultCode == 0) {
                    dispatch(followActionCreator(userId));
                }
                dispatch(toggleFollowingInProgressActionCreator(false, userId));
            });
    }
};

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgressActionCreator(true, userId));
        usersAPI.unfollow(userId)
            .then((response) => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowActionCreator(userId));
                }
                dispatch(toggleFollowingInProgressActionCreator(false, userId));
            });
    }
};
