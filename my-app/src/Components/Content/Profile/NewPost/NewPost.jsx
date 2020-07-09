import React from "react";
import styles from "./NewPost.module.css";
import ava from "../../../../usersPhoto/ava.jpg";

export default function NewPost(props) {

    const newPostText = React.createRef();

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        const text = newPostText.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={styles.post}>
            <img className={styles.ava} src={ava} alt=""/>
            <form action="" className={styles.form}>
                <textarea ref={newPostText} value={props.text} className={styles.textarea}
                          onChange={onPostChange} cols="30" rows="10" placeholder="Write anything..."/>
                <button className={styles.add} type="button" onClick={onAddPost}>Add</button>
            </form>
        </div>
    );
};
