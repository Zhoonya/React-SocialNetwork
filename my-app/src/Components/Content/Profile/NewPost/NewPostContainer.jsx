import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        text: state.profilePage.newPostText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
