import React from "react";
import styles from "./Dialog.module.css";
import ava from "../../../../usersPhoto/ava.jpg";
import {NavLink} from "react-router-dom";

export default function Dialog (props) {
    return (
        <NavLink to={"/dialogs/" + props.id} className={styles.link} activeClassName={styles.activeLink} >
            <img className={styles.ava} src={ava} alt=""/>
            <h4 className={styles.name}>{props.name}</h4>
        </NavLink>
    );
};
