import React from "react";
import styles from "./Profile.module.css";
import ava from "../../../usersPhoto/ava.jpg";
import NewPostContainer from "./NewPost/NewPostContainer";
import PostsContainer from "./Posts/PostsContainer";
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../common/Preloader/Preloader";
import photo from "../../../usersPhoto/04.png";


export default function Profile (props) {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={styles.content}>
            <div className="item">
                {/*<img className={styles.ava} alt="ava" src={ava}/>*/}
                <img className={styles.ava} alt="ava" src={props.profile.photos.large ? props.profile.photos.large : photo}/>
                <h1 className={styles.name}>{props.profile.fullName}</h1>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
            <div className="item">
                <NewPostContainer />
                <h3>My posts</h3>
                <PostsContainer />
            </div>
        </div>
    );
};
