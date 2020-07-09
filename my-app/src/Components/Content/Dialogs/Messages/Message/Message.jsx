import React from "react";
import styles from "./Message.module.css";
import ava from "../../../../../usersPhoto/ava.jpg";

export default function Message (props) {
    return (
        <div className={styles.message}>
            <img className={styles.ava} src={ava} alt=""/>
            <div className={styles.information}>
                <h3 className={styles.name}>{props.name}</h3>
                <time className={styles.time}>{props.date}</time>
            </div>
            <p className={styles.text}>
                {props.text}
            </p>
        </div>
    );
};
