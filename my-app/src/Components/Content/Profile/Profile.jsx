import React from "react";
import styles from "./Profile.module.css";
import ava from "../../../usersPhoto/ava.jpg";
import NewPostContainer from "./NewPost/NewPostContainer";
import PostsContainer from "./Posts/PostsContainer";

export default function Profile (props) {
    return (
        <div className={styles.content}>
            <div className="item">
                <img className={styles.ava} alt="ava" src={ava}/>
                <h1 className={styles.name}>Soft Kitty</h1>
            </div>
            <div className="item">
                <NewPostContainer />
                <h3>My posts</h3>
                <PostsContainer />
            </div>
        </div>
    );
};
