import instance from "../Api/axios-instance";
const authApi = {
  me() {
    return instance.get(`auth/me`).then((res) => res);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`).then((res) => {
      return res.data;
    });
  },
};
export default authApi;
