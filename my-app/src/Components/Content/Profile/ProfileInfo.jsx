import React, {useState} from "react";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";

export default function ProfileInfo(props) {
    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        props.updateProfileData(formData)
            .then(() => {setEditMode(false)});
    };

    return (
        !editMode ? <ProfileData openForm={() => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>
        : <ProfileDataForm closeForm={() => {setEditMode(false)}} onSubmit={onSubmit} profile={props.profile} initialValues={props.profile} updateProfileData={props.updateProfileData}/>

    )
}
