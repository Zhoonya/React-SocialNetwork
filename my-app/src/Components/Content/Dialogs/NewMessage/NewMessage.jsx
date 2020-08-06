import React from "react";
import styles from "./NewMessage.module.css";
import {Field, reduxForm} from "redux-form";

function newMessageForm(props) {
    return (
        <form action="" className={styles.form} onSubmit={props.handleSubmit}>
                <Field component="textarea" className={styles.textarea} value={props.text}
                          name="message" cols="30" rows="10" placeholder="Write anything..." />
            <button className={styles.send} type="submit">Send</button>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({form: "message"})(newMessageForm);

export default function NewMessage (props) {

    const onSendMessage = (formData) => {
        props.sendMessage(formData.message);
    };

    return (
        <div className={styles.container}>
            <img className={styles.ava} src="../../../../usersPhoto/1.jpg" alt=""/>
            <NewMessageReduxForm onSubmit={onSendMessage}/>
        </div>
    );
};
