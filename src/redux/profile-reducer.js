import ProfileApi from "../components/Api/profileApi";
const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const SET_PHOTO_SUCSSES = "SET_PHOTO_SUCSSES";

let initialState = {
  postData: [
    { message: "Hey how are you?", likeCount: 11 },
    { message: "Say some1", likeCount: 121 },
  ],
  newPostText: "",
  profile: null,
  status: "",
};
export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setProfile = (profile) => {
  return {
    type: SET_PROFILE,
    profile,
  };
};

export const setProfileStatus = (status) => {
 
  return {
    type: SET_PROFILE_STATUS,
    status,
  };
};
export const setPhoto = (file) => {
  debugger;
  return {
    type: SET_PHOTO_SUCSSES,
    file
  };
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTO_SUCSSES: {
      return {
        ...state,
        profile:{...state.profile, photos:action.file}
      };
    }
    case ADD_POST: {
      let newPost = {
        id: 5,
        likeCount: 0,
        message: action.newPostText,
      };

      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: "",
      };
    }
    case SET_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_PROFILE_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};
export const setUserProfile = (userId) => {
  return (dispatch) => {
    ProfileApi.getProfile(userId).then((data) => {
      dispatch(setProfile(data));
    });
  };
};
export const savePhoto = (file) => {
  return (dispatch) => {
    ProfileApi.savePhoto(file).then((data) => {
    if(data.resultCode ===0){
      dispatch(setPhoto(data.data.photos));
    }});
  };
};
export const getUserProfileStatus = (userId) => {
  return (dispatch) => {
    ProfileApi.getProfileStatus(userId).then((data) => {
      dispatch(setProfileStatus(data));
    });
  };
};
export const updateProfileStatus = (status) => {
  return (dispatch) => {
    ProfileApi.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setProfileStatus(status));
      }
    });
  };
};

export default profileReducer;
