import React from "react";
import styles from "./Users.module.css";
import Preloader from "../../Preloader/Preloader";
import {NavLink} from "react-router-dom";

// class Users extends React.Component{
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//             .then((response) => {
//                 this.props.setUsers(response.data.items);
//                 this.props.setTotalUsersCount(response.data.totalCount)
//             });
//     }
//
//     render() {
//         const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
//         let pages = [];
//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i);
//         }
//
//         return (
//             <div>
//                 <div>
//                     {pages.map((page) => {
//                         const classPage = this.props.currentPage === page ? styles.selectedPage + " " + styles.pageNumber : styles.pageNumber;
//                         return (
//                             <button className={classPage} key={page}
//                             onClick={() => {this.onPageClick(page)}}>{page}</button>
//                         );
//                     })}
//                 </div>
//
//                 {this.props.users.map((user) => {
//                     return (
//                         <div key={user.id} className={styles.user}>
//                             <img src={user.photos.small !== null ? user.photos.small : require(`../../../usersPhoto/04.png`)}  className={styles.ava} height="100"/>
//                             <div className={styles.information}>
//                                 <h3 className={styles.name}>{user.name}</h3>
//                                 {/*<p className={styles.location}>{user.location.country}, {user.location.city}</p>*/}
//                             </div>
//                             {user.followed
//                                 ? <button className={styles.following} onClick={() => {this.props.unfollow(user.id)}}>Follow</button>
//                                 : <button className={styles.following} onClick={() => {this.props.follow(user.id)}}>Unfollow</button> }
//                         </div>
//                     )
//                 })}
//             </div>
//         );
//     }
//
//     onPageClick(pageNumber) {
//         this.props.setCurrentPage(pageNumber);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
//             .then((response) => this.props.setUsers(response.data.items));
//     }
// }

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
                                    ? <button className={styles.following} onClick={() => {props.unfollow(user.id)}}>Follow</button>
                                    : <button className={styles.following} onClick={() => {props.follow(user.id)}}>Unfollow</button> }
                            </div>
                        )
                    })
            }


        </div>
    );

}
