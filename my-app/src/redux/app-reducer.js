import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getUserDataThunkCreator} from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

const initialState = {
    initialized: false,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            const stateCopy = {...state, initialized: true };
            return stateCopy;
        }
        default:
            return state;
    }
};

export const setInitializedActionCreator = () => {
    return {
        type: SET_INITIALIZED,
    }
};

export const initializeAppThunkCreator = () => {
    return (
        (dispatch) => {
            dispatch(getUserDataThunkCreator())
                .then(() => {
                    dispatch(setInitializedActionCreator());
                });
        }
    )
};
