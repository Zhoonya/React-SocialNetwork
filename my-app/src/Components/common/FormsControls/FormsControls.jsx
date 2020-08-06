import React from "react";
import styles from "./FormsControls.module.css"

function FormControl({input, meta, ...props}) {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError && styles.error)}>
            {props.children}
            {hasError && <p>{meta.error}</p>}

        </div>
    )
}

export function Textarea(props) {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}></textarea>
        </FormControl>
    )
}

export function Input(props) {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}
