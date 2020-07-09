import React from "react";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
    }
};

const MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;
