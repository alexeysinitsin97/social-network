import instance from "../Api/axios-instance";

const ProfileApi = {
    getProfile(userId) {
      return instance.get(`profile/${userId}`).then((res) => {return res.data});
    },
    getProfileStatus(userId){
      return instance.get(`profile/status/${userId}`).then((res)=> res.data)
    },
    updateStatus(status){
      return instance.put(`profile/status`, {status}).then((res)=>res.data)
    },
    savePhoto(File) {
      const formData = new FormData();
      formData.append("image", File);

      return instance.put(`profile/photo`, formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      }).then(res => res.data);
  },
  };
  export default ProfileApi;