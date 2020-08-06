import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxLength10 = maxLengthCreator(10);

function LoginForm (props) {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name="login" type="text" placeholder="Login" validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name="password" type="password" placeholder="Password" validate={[required]}/>
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

export function Login (props) {

    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
    })
};

export default connect(mapStateToProps, {login: loginThunkCreator})(Login);
