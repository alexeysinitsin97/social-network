import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl, Textarea } from "../../common/FormControl/FormControl.js";
import {required, maxLengthCreator} from "../../utils/validation/FormValid.js"

import Posts from "./Posts/Posts";
const MyPosts = (props) => {

  let onSubmit = (data) => {
    let newPostText = data.newPostText;
    props.onAddPost(newPostText);
  };

  let postElements = props.posts.map((p) => <Posts message={p.message} />);

  return (
    <div>
      My post
      <AddNewPostRedux onSubmit={onSubmit} />
      <div>new post</div>
      {postElements}
    </div>
  );
};
let maxLength20 = maxLengthCreator(20);
const AddPostForm = (props) => {
  
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        placeholder="enter your text here"
        name="newPostText"
        validate={[required, maxLength20]}
      />
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};
const AddNewPostRedux = reduxForm({ form: "addPostForm" })(AddPostForm);
export default MyPosts;
