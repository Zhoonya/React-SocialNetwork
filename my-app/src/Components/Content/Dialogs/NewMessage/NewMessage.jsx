import React from "react";
import styles from "./NewMessage.module.css";

export default function NewMessage (props) {

    const onSendMessage = () => {
        props.sendMessage();
    };

    const onChangeMessage = (e) => {
        const text = e.target.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={styles.container}>
            <img className={styles.ava} src="../../../../usersPhoto/1.jpg" alt=""/>
            <form action="" className={styles.form}>
                <textarea className={styles.textarea} onChange={onChangeMessage} value={props.text}
                          name="" id="" cols="30" rows="10" placeholder="Write anything..." />
                <button className={styles.send} type="button" onClick={onSendMessage}>Send</button>
            </form>
        </div>
    );
};
