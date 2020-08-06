import React from "react";
import styles from "./NewPost.module.css";
import ava from "../../../../usersPhoto/ava.jpg";
import {Field, reduxForm} from "redux-form";

function NewPostForm(props) {
    return (
        <form action="" className={styles.form} onSubmit={props.handleSubmit}>
                <Field component="textarea" name="post" value={props.text} className={styles.textarea}
                       cols="30" rows="10" placeholder="Write anything..."/>
            <button className={styles.add} type="submit">Add</button>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: "post"})(NewPostForm)

export default function NewPost(props) {

    const onAddPost = (daraForm) => {
        props.addPost(daraForm.post);
    };

    return (
        <div className={styles.post}>
            <img className={styles.ava} src={ava} alt=""/>
            <NewPostReduxForm onSubmit={onAddPost} />
        </div>
    );
};
