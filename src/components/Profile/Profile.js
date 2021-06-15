import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProdileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profilePage.profile}
        status={props.profilePage.status}
        userId = {props.userId}
        updateProfileStatus={props.updateProfileStatus}
        saveProfile={props.saveProfile}
      />
      {/* <MyPostsContainer /> */}
    </div>
  );
};
export default Profile;
