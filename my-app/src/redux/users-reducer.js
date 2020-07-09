const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

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
            return { ...state, isFetching: action.isFetching}
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
