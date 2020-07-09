import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export default function Navbar () {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div>
                    <NavLink to="/profile" activeClassName={styles.activeLink} className={styles.item}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" activeClassName={styles.activeLink} className={styles.item}>Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/users" activeClassName={styles.activeLink} className={styles.item}>Users</NavLink>
                </div>
                <div>
                    <NavLink to="/news" activeClassName={styles.activeLink} className={styles.item}>News</NavLink>
                </div>
                <div>
                    <NavLink to="/settings" activeClassName={styles.activeLink} className={styles.item}>Settings</NavLink>
                </div>
            </div>

        </nav>
    );
};
