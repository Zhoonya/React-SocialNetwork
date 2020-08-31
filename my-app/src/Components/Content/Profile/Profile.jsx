import React, {Fragment} from "react";
import styles from "./Profile.module.css";
import ava from "../../../usersPhoto/ava.jpg";
import NewPostContainer from "./NewPost/NewPostContainer";
import PostsContainer from "./Posts/PostsContainer";
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../common/Preloader/Preloader";
import photo from "../../../usersPhoto/04.png";
import ProfileInfo from "./ProfileInfo";


export default function Profile (props) {

    if (!props.profile) {
        return <Preloader/>
    }

    const changePhotoHandler = (e) => {
        if (e.target.files.length) {
            props.changePhoto(e.target.files[0])
        }
    };

    return (
        <div className={styles.content}>
            <div className="item">
                {/*<img className={styles.ava} alt="ava" src={ava}/>*/}
                <img className={styles.ava} alt="ava" src={props.profile.photos.large ? props.profile.photos.large : photo}/>

                <h1 className={styles.name}>{props.profile.fullName}</h1>
                {props.isOwner &&
                <div>
                    <input type="file" id="photoFile" className={styles.photoInput} onChange={changePhotoHandler}/>
                    <label for="photoFile">Choose a photo</label>
                </div>}
                <ProfileInfo profile={props.profile} isOwner={props.isOwner} updateProfileData={props.updateProfileData}/>
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
