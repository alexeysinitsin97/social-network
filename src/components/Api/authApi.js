import instance from "../Api/axios-instance";
const authApi = {
  me() {
    return instance.get(`auth/me`).then((res) => res);
  },
  login(email, password, rememberMe = false, captcha) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete(`auth/login`).then((res) => {
      return res.data;
    });
  },
  getCaptcha() {
    return instance.get(`security/get-captcha-url`).then((res) => {
      return res;
    });
  },
};
export default authApi;
