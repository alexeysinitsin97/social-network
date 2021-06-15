import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControl/FormControl";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import style from "../common/FormControl/FormControl.module.css";
const LoginForm = (props) => {
  console.log(props);
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <div>
        <Field placeholder={"Email"} component={Input} name={"email"} />
      </div>
      <div>
        <Field placeholder={"Password"} component={Input} name={"password"} />
      </div>
      {props.error && (
        <div className={style.formSummaryError}>{props.error}</div>
      )}
      <div>
        <Field component={Input} type="checkbox" name={"rememberMe"} />
        Remember me
      </div>
      {props.captcha ? (
        <div>
          <img src={props.captcha} alt="captcha" />
          <Field
            placeholder={"Enter symbols from image"}
            component={Input}
            name={"captcha"}
          />
        </div>
      ) : null}

      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Redirect to="/Profile" />;
  }
  return (
    <div>
      <h1>Login</h1>{" "}
      <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
  };
};

export default connect(mapStateToProps, { login })(Login);
