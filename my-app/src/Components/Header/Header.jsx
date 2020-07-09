import React from "react";
import styles from "./Header.module.css"
import logo from "../../feather.svg"

export default function Header () {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo" />
        </header>
    );
};
