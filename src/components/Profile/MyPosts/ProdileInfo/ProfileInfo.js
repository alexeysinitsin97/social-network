/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWIthHooks";

const ProfileInfo = (props) => {
  const  uploadPhoto =(e)=>{
    if(e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
  }

  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        <div>
          <img
            src="https://hdwallpaperim.com/wp-content/uploads/2017/08/31/158174-waterfall-Sun-sunlight-water.jpg"
            alt="forest"
            className={s.fon}
          />
        </div>
        <div>
          <div>
            <img src={props.profile.photos.large || props.profile.photos.small || userPhoto} />
          </div>
          {props.isOwner?<input type="file" onChange={uploadPhoto}/>:null} 
          <div>{props.profile.fullName}</div>
        </div>
        <div>
          <ProfileStatusWithHooks status={props.status} updateProfileStatus = {props.updateProfileStatus}/>
        </div>
      </div>
    );
  }
};
export default ProfileInfo;
