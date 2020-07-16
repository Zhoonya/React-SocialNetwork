import React from "react";
import styles from "./Users.module.css";
import Preloader from "../../Preloader/Preloader";
import {NavLink} from "react-router-dom";

export default function Users (props) {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((page) => {
                    const classPage = props.currentPage === page ? styles.selectedPage + " " + styles.pageNumber : styles.pageNumber;
                    return (
                        <button className={classPage} key={page} onClick={() => {props.onPageClick(page)}}>{page}</button>
                    );
                })}
            </div>

            {props.isFetching ? <Preloader/> :
                props.users.map((user) => {
                    return (
                        <div key={user.id} className={styles.user}>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.small !== null ? user.photos.small : require(`../../../usersPhoto/04.png`)}  className={styles.ava} height="100"/>
                            </NavLink>
                            <div className={styles.information}>
                                <h3 className={styles.name}>{user.name}</h3>
                                {/*<p className={styles.location}>{user.location.country}, {user.location.city}</p>*/}
                            </div>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some((id) => id === user.id)} className={styles.following} onClick={() => {
                                    props.unfollow(user.id)}}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some((id) => id === user.id)} className={styles.following} onClick={() => {
                                    props.follow(user.id)}}>Follow</button> }
                        </div>
                    )
                    })
            }


        </div>
    );

}
