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
