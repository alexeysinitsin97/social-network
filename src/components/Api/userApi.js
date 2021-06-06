import instance from "../Api/axios-instance";

const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?totalCount&page=${currentPage}&count=${pageSize}`).then((res) => {return res.data});
  },
};
export default usersApi;
