import {authAPI} from "../api/api";

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
            const stateCopy = {...state, ...action.data, isAuth: true};
            return stateCopy;
        }
        default:
            return state;
    }
};

export const setUserDataActionCreator = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
};

export const getUserDataThunkCreator = () => {
    return (
        (dispatch) => {
            authAPI.me()
                .then((response) => {
                    if (response.data.resultCode === 0) {
                        let {id, email, login} = response.data.data;
                        dispatch(setUserDataActionCreator(id, email, login));
                    }
                });
        }
    )
};
