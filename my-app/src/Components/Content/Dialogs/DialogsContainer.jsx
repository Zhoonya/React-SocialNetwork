import React from "react";
import styles from "./Dialogs.module.css";
import DialogsListContainer from "./Dialog/DialogsListContainer";
import NewMessageContainer from "./NewMessage/NewMessageContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

// export default class DialogsContainer extends React.Component () {
//     render() {
//         return (
//             <Dialogs/>
//         )
//     }
// }
let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

// let AuthRedirectComponent = (props) => {
//     if (!this.props.isAuth) {
//         return <Redirect to={"/login"} />
//     }
//     return <Dialogs {...this.props} />
// };



const DialogsContainer = connect(mapStateToProps)(AuthRedirectComponent);

export default DialogsContainer;
