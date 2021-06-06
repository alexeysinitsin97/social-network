import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControl/FormControl";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import style from "../common/FormControl/FormControl.module.css";
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <div>
        <Field placeholder={"Email"} component={Input} name={"email"} />
      </div>
      <div>
        <Field placeholder={"Password"} component={Input} name={"password"} />
      </div>
      {props.error && <div className={style.formSummaryError}>{props.error}</div>}
      <div>
        <Field component={Input} type="checkbox" name={"rememberMe"} />
        Remember me
      </div>
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    console.log(props);
    return <Redirect to="/Profile" />;
  }
  return (
    <div>
      <h1>Login</h1> <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
