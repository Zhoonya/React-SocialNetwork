import {usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
    posts: [
        {id: "4", date: "20 june 2020", message: "MewMewMewMewMewMewMew", likesCount: "123"},
        {id: "3", date: "15 june 2020", message: "I ate all stocks of sausage, poured into the owner's slippers and broke a flower pot. Productive day. I'm tired.", likesCount: "99999"},
        {id: "2", date: "13 june 2020", message: "I'm fat soft kitty!", likesCount: "35"},
        {id: "1", date: "11 june 2020", message: "Hi! I'm here!", likesCount: "20"},
    ],
    newPostText: "Hi",
    profile: null,
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: "5",
                date: String(new Date()),
                message: state.newPostText,
                likesCount: "0",
            };
            const stateCopy = {
                ...state,
                posts: [newPost, ...state.posts]
            };
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            const stateCopy = {...state, profile: action.profile};
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    };
};

export const setUserProfileActionCreator = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};

export const getUserProfileThunkCreator = (userId) => {
    return ((dispatch) => {
        usersAPI.getProfile(userId)
            .then((response) => {
                dispatch(setUserProfileActionCreator(response.data));
            });
    })
};
