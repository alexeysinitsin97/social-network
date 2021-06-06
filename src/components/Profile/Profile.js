import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProdileInfo/ProfileInfo";
import s from "./Profile.module.css";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profilePage.profile}  status={props.profilePage.status} updateProfileStatus = {props.updateProfileStatus}/>
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
