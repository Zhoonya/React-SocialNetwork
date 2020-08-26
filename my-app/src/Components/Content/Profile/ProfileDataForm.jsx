import React, {Fragment, useState} from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "./../../common/FormsControls/FormsControls.module.css"

function Form(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>
            }

            <label>Full name</label>:
            {createField("Full name", "fullName", [], Input)}

            <label>About me</label>:
            {createField("About me", "aboutMe", [], Textarea)}

            <label>Looking for a job</label>
            {/*<input id="lookingForAJob" type="radio" checked={props.profile.lookingForAJob}/>*/}
            {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}

            <label>Professional skills</label>
            {/*<input type="text" id="professionalSkills" value={props.profile.lookingForAJobDescription}/>*/}
            {createField("Professional skills", "lookingForAJobDescription", [], Textarea)}

            <fieldset>
                <legend>Contacts</legend>
                {Object.keys(props.profile.contacts).map((key) => {
                    return (
                        <Fragment key={key}>
                            <label>{key}</label>
                            {/*<input id={props.profile.contacts[key]} name={props.profile.contacts[key]} type="text"*/}
                            {/*       value={props.profile.contacts[key]}/>*/}
                            {createField(key, "contacts." + key, [], Input)}
                        </Fragment>
                    )

                })}
            </fieldset>
            <button type="reset" onClick={props.closeForm}>Close</button>
            <button type="submit">Save</button>
        </form>

    )
}

const ProfileDataReduxForm = reduxForm({
    form: 'profile'
})(Form);

export default ProfileDataReduxForm;
