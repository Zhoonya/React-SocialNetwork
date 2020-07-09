import React from "react";
import styles from "./Post.module.css"
import ava from "../../../../../usersPhoto/ava.jpg"

export default function Post (props) {
    return (
        <div className={styles.post}>
            <img className={styles.ava} src={ava} alt=""/>
            <div className={styles.information}>
                <h3 className={styles.name}>Soft Kitty</h3>
                <time className={styles.time}>{props.date}</time>
            </div>
            <div className={styles.message}>
                {props.message}
            </div>
            <div className={styles.like}>
                <button className={styles.button} type="button"></button>
                <span className={styles.count}>{props.count}</span>
            </div>
        </div>
    );
};
