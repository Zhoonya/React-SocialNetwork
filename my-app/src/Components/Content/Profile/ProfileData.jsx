import React, {useState} from "react";

export default function ProfileInfo(props) {
    const [editMode, setEditMode] = useState(false);
    return (
        <div>
            <ul>
                <li><b>About me</b>: {props.profile.aboutMe}</li>
                <li><b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}</li>
                {props.profile.lookingForAJob && <li><b>Professional skills</b>: {props.profile.lookingForAJobDescription}</li>}
                <li><b>Contacts</b>
                    <ul>
                        {Object.keys(props.profile.contacts).map((key) =>{
                            return <li><b>{key}</b>: {props.profile.contacts[key]}</li>
                        })}
                    </ul>
                </li>
            </ul>
            {props.isOwner && <button onClick={props.openForm}>Edit personal information</button>}
        </div>

    )
}
