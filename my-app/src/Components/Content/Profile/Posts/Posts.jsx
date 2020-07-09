import React from "react";
import Post from "./Post/Post";
// import {StoreContext} from "../../../../StoreContext";

export default function Posts (props) {
    const createPostsMarkup = (posts) => {
        return posts.map((post) => {
            return <Post message={post.message} count={post.likesCount} key={post.id} date={post.date} />
        })
    };

    return (
        <div>
            {createPostsMarkup(props.posts)}
        </div>
    )
};
