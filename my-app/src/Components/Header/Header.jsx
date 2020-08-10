import React from "react";
import styles from "./Header.module.css"
import logo from "../../feather.svg"
import {NavLink} from "react-router-dom";

export default function Header (props) {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo" />
            <p  className={styles.login}>
                {props.isAuth ?
                    <div>{props.login} <button className={styles.logoutButton} onClick={props.logout}>LogOut</button></div>
                    : <NavLink className={styles.loginLink} to={"/login"}>Login</NavLink>}
            </p>

        </header>
    );
};
