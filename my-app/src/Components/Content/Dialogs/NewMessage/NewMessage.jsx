import React from "react";
import styles from "./NewMessage.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators";

const maxLength40 = maxLengthCreator(40);

function newMessageForm(props) {
    return (
        <form action="" className={styles.form} onSubmit={props.handleSubmit}>
                <Field component={Textarea} className={styles.textarea} value={props.text}
                          name="message" cols="30" rows="10" placeholder="Write anything..."
                       validate={[required, maxLength40]} />
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
