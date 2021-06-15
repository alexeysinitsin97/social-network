/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWIthHooks";
import ProfileDataReduxForm from "./ProfileFormData";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));


const ProfileInfo = (props) => {
  const classes = useStyles();
  let [editMode, setEditMode] = useState(false);
  let goToEditMode = () => {

    setEditMode(true);
  };
  const uploadPhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  let onSubmit = (data) => {
    let userId = props.userId;
    props.saveProfile(data, userId);
    setEditMode(false);
  };
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div className={s.profile}>
        <div className={s.profile__content}>
          <div>
            <div>
              <img
                className={s.profile__photo}
                src={
                  props.profile.photos.large ||
                  props.profile.photos.small ||
                  userPhoto
                }
              />
            </div>
            {props.isOwner ? (
          <div className={classes.root}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={uploadPhoto}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" style={{ color: green[500] }} component="span">
                Upload
              </Button>
            </label>
            <input accept="image/*" className={classes.input} id="icon-button-file" onChange={uploadPhoto} type="file" />
            <label htmlFor="icon-button-file">
              <IconButton style={{ color: green[500] }} aria-label="upload picture" component="span">
                <AddAPhotoIcon />
              </IconButton>
            </label>
          </div>
            ) : null}
          </div>
          {editMode ? <ProfileDataReduxForm profile={props.profile} initialValues={props.profile} onSubmit={onSubmit}/> : <ProfileData goToEditMode={goToEditMode} props={props} />}
        </div>
      </div>
    );
  }
};

const ProfileData = ({props, goToEditMode}) => {
  return (
    <div>
      {props.isOwner ? (
        <button onClick={goToEditMode}>edit</button>
      ) : null}
      <div>
        <b>Nickname: </b> {props.profile.fullName}
      </div>
      <div>
        <b>lookingForAJob: </b>
        {props.profile.lookingForAJob ? "Да" : "Нет"}
      </div>
      <div>
        <b>About me: </b>
        {props.profile.aboutMe || "......"}
      </div>
      <div>
        <b> lookingForAJobDescription: </b>
        {props.profile.lookingForAJobDescription
          ? props.profile.lookingForAJobDescription
          : "........"}
      </div>
      <ProfileStatusWithHooks
        status={props.status}
        updateProfileStatus={props.updateProfileStatus}
      />
      <div>
        <b>Contacts: </b>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              title={key}
              value={props.profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};
const Contact = ({ title, value }) => {
  return (
    <div className={s.contacts}>
      <b>{title}: </b>
      {value}
    </div>
  );
};
export default ProfileInfo;
