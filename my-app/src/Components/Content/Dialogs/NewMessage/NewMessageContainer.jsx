import React from "react";
import {sendMessageActionCreator} from "../../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        text: state.dialogsPage.newMessageText,
    }
};

const NewMessageContainer = connect(mapStateToProps, {sendMessage: sendMessageActionCreator})(NewMessage);

export default NewMessageContainer;
