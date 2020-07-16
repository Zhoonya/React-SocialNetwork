import React from "react";
import styles from "./Dialogs.module.css";
import DialogsListContainer from "./Dialog/DialogsListContainer";
import NewMessageContainer from "./NewMessage/NewMessageContainer";
import MessagesContainer from "./Messages/MessagesContainer";


export default function Dialogs (props) {
    // if(!props.isAuth) {
    //     return <Redirect to={"/login"}/>
    // }

    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                <DialogsListContainer />
            </div>
            <div className={styles.messages}>
                <MessagesContainer />
                <NewMessageContainer />
            </div>
            {/*<img src={require(`../../../usersPhoto/${4}.jpg`)} height="100"/>*/}
        </div>
    );
};
