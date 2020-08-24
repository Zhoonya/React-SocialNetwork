import React from "react";
import styles from "./Users.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import Paginator from "../../common/Paginator/Paginator";

export default function Users (props) {

    return (
        <div>
            <Paginator currentPage={props.currentPage} onPageClick={props.onPageClick}
                       totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>

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
