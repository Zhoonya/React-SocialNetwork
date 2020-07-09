import React from "react";
import Dialog from "./Dialog";
// import {StoreContext} from "../../../../StoreContext";

export default function DialogsList (props) {
    const createDialogsMarkup = (dialogs) => {
        return dialogs.map((dialog) => {
            return <Dialog name={dialog.name} key={dialog.id} id={dialog.id}/>
        })
    };
    return (
        <div>
            {createDialogsMarkup(props.dialogs)}
        </div>
    )
};
