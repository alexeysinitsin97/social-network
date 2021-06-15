import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "../../../common/FormControl/FormControl.module.css";
import { Input } from "../../../common/FormControl/FormControl";
import { connect } from "react-redux";

const ProfileFormData = (props) => {
console.log(props);
  return (
    <div>
  
      <form onSubmit={props.handleSubmit}>
      <div><button>save</button></div>
        <div>
          <b>Nickname:</b> <Field component={Input} name="fullName" />
        </div>
        <div>
          <b>lookingForAJob:</b>
          <Field component={Input} type="checkbox" name="lookingForAJob" />
        </div>
        <div>
          <b>lookingForAJobDescription:</b><Field component={Input} type="textarea" name="lookingForAJobDescription" />
        </div>
        <div>
          <b>aboutMe:</b><Field component={Input} type="textarea" name="aboutMe" />
        </div>
        <div>
        
        {Object.keys(props.profile.contacts).map((key) => {
          return (
              <div>
                <b>{key}: </b>  <Field component={Input} name={"contacts." + key} />
            </div>
          );
        })}
      </div>
      </form>
    </div>
  );
};
export const ProfileDataReduxForm = reduxForm({ form: "ProfileFormData" })(
  ProfileFormData
);

export default ProfileDataReduxForm;
