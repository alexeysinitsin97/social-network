import axios from "axios";
import instance from "../Api/axios-instance";

const followApi = {
  doUnfollow(id) {
    return instance.delete(`follow/${id}`).then((res) => {return res.data});
  },
  doFollow(id){
    return instance.post(`follow/${id}`).then((res) => {return res.data});
  }
};
export default followApi;
