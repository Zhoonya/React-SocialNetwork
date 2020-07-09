import React from "react";
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from "../../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        text: state.dialogsPage.newMessageText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
            },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
            },
    }
};

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
