import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";

const maxLength10 = maxLengthCreator(10);

function LoginForm (props) {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name="login" type="text" placeholder="Login" validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field component={Input} name="password" type="password" placeholder="Password" validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field component={Input} name="remember" type="checkbox" /> Remember me
            </div>
            <div>
                <button type="submit">LogIn</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default function Login () {

    const onSubmit = (formData) => {
console.log(formData);
    };

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}
