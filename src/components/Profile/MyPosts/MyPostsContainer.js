import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.postData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
