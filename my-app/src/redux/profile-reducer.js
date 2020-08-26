import {usersAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTO = "SET_PHOTO";
const SET_PROFILE_DATA = "SET_PROFILE_DATA";

const initialState = {
    posts: [
        {id: "4", date: "20 june 2020", message: "MewMewMewMewMewMewMew", likesCount: "123"},
        {id: "3", date: "15 june 2020", message: "I ate all stocks of sausage, poured into the owner's slippers and broke a flower pot. Productive day. I'm tired.", likesCount: "99999"},
        {id: "2", date: "13 june 2020", message: "I'm fat soft kitty!", likesCount: "35"},
        {id: "1", date: "11 june 2020", message: "Hi! I'm here!", likesCount: "20"},
    ],
    profile: null,
    status: "",
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: "5",
                date: String(new Date()),
                message: action.post,
                likesCount: "0",
            };
            const stateCopy = {
                ...state,
                posts: [newPost, ...state.posts]
            };
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            const stateCopy = {...state, profile: action.profile};
            return stateCopy;
        }
        case SET_STATUS: {
            const stateCopy = {...state, status: action.status};
            return stateCopy;
        }
        case SET_PHOTO: {
            const stateCopy = {...state, profile: {...state.profile, photos: action.photos}};
            return stateCopy;
        }
        case SET_PROFILE_DATA: {
            const stateCopy = {...state, profile: {...action.profileData}};
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = (post) => {
    return {
        type: ADD_POST,
        post
    };
};

export const setUserProfileActionCreator = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};

export const setStatusActionCreator = (status) => {
    return {
        type: SET_STATUS,
        status
    };
};

export const setPhotoActionCreator = (photos) => {
    return {
        type: SET_PHOTO,
        photos,
    }
};

export const getUserProfileThunkCreator = (userId) => {
    return ((dispatch) => {
        usersAPI.getProfile(userId)
            .then((response) => {
                dispatch(setUserProfileActionCreator(response.data));
            });
    })
};

export const getStatusThunkCreator = (userId) => {
    return ((dispatch) => {
        profileAPI.getStatus(userId)
            .then((response) => {
                dispatch(setStatusActionCreator(response.data));
            });
    })
};

export const updateStatusThunkCreator = (status) => {
    return ((dispatch) => {
        profileAPI.updateStatus(status)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatusActionCreator(status));
                }
            });
    })
};

export const changePhotoThunkCreator = (photoFile) => {
    return ((dispatch) => {
        profileAPI.changePhoto(photoFile)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setPhotoActionCreator(response.data.data.photos));
                }
            })
    })
};

export const updateProfileDataThunkCreator = (profileData) => async (dispatch, getState) => {
        const userId = getState().auth.userId;
        // profileAPI.updateProfile(profileData)
        //     .then((response) => {
        //         if (response.data.resultCode === 0) {
        //             dispatch(getUserProfileThunkCreator(userId));
        //         } else {
        //             let message = response.data.messages.length > 0 ? response.data.messages : "";
        //             dispatch(stopSubmit("profile", {_error: message}));
        //             return Promise.reject(response.data.messages[0]);
        //         }
        //     })

        const response = await profileAPI.updateProfile(profileData);

        if (response.data.resultCode === 0) {
            dispatch(getUserProfileThunkCreator(userId));
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages : "";
            dispatch(stopSubmit("profile", {_error: message}));
            return Promise.reject(response.data.messages[0]);
        }
    };
