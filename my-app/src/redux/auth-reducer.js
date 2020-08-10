import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            const stateCopy = {...state, ...action.data};
            return stateCopy;
        }
        default:
            return state;
    }
};

export const setUserDataActionCreator = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth},

    }
};

export const getUserDataThunkCreator = () => {
    return (
        (dispatch) => {
            authAPI.me()
                .then((response) => {
                    if (response.data.resultCode === 0) {
                        let {id, email, login} = response.data.data;
                        dispatch(setUserDataActionCreator(id, email, login, true));
                    }
                });
        }
    )
};

export const loginThunkCreator = (email, password, rememberMe) => {
    return (
        (dispatch) => {
            authAPI.login(email, password, rememberMe)
                .then((response) => {
                    if (response.data.resultCode === 0) {
                        dispatch(getUserDataThunkCreator());
                    } else {
                        let message = response.data.messages.length > 0 ? response.data.messages : "";
                        dispatch(stopSubmit("login", {_error: message}));
                    }
                })
        }
    )
};

export const logoutThunkCreator = () => {
    return (
        (dispatch) => {
            authAPI.logout()
                .then((response) => {
                    if (response.data.resultCode === 0) {
                        dispatch(setUserDataActionCreator(null, null, null, false));
                    }
                })
        }
    )
};
