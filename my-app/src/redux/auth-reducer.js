import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            const stateCopy = {...state, ...action.data};
            return stateCopy;
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            const stateCopy = {...state, captchaUrl: action.captchaUrl};
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

export const getCaptchaUrlActionCreator = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        captchaUrl
    }
};

export const getUserDataThunkCreator = () => {
    return (
        (dispatch) => {
            return authAPI.me()
                .then((response) => {
                    if (response.data.resultCode === 0) {
                        let {id, email, login} = response.data.data;
                        dispatch(setUserDataActionCreator(id, email, login, true));
                    }
                });
        }
    )
};

export const loginThunkCreator = (email, password, rememberMe, captcha) => {
    return (
        (dispatch) => {
            authAPI.login(email, password, rememberMe, captcha)
                .then((response) => {
                    if (response.data.resultCode === 0) {
                        dispatch(getUserDataThunkCreator());
                    } else {
                        if (response.data.resultCode === 10) {
                            dispatch(getCaptchaUrlThunkCreator());
                        }
                        let message = response.data.messages.length > 0 ? response.data.messages : "";
                        dispatch(stopSubmit("login", {_error: message}));
                    }
                })
        }
    )
};

export const getCaptchaUrlThunkCreator = () => {
    return (dispatch) => {
        securityAPI.getCaptchaUrl()
            .then((response) => {
                const captchaUrl = response.data.url;
                dispatch(getCaptchaUrlActionCreator(captchaUrl));
            });
    }
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
