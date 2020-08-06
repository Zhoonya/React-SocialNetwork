import React from "react";
import {addPostActionCreator} from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        text: state.profilePage.newPostText,
    }
};

const NewPostContainer = connect(mapStateToProps, {addPost: addPostActionCreator})(NewPost);

export default NewPostContainer;
