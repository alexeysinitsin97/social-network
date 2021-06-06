import { stopSubmit } from "redux-form";
import authApi from "../components/Api/authApi";
const SET_USER_DATA = "SET_USER_DATA";
let initialState = {
  login: null,
  email: null,
  userId: null,
  isAuth: false,
};
export const setUserAuthAC = (login, email, userId, isAuth) => {
  return { type: SET_USER_DATA, data: { login, email, userId, isAuth } };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};
export const authMe = () => (dispatch) => {
  return authApi.me().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(
        setUserAuthAC(
          res.data.data.login,
          res.data.data.email,
          res.data.data.id,
          true
        )
      );
    }
  });
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authApi.login(email, password, rememberMe).then((data) => {
      if (data.data.resultCode === 0) {
        debugger;
        dispatch(authMe());
      } else {
        console.log(data);
        let messages = data.data.messages.length
          ? data.data.messages
          : "Some Error";
        dispatch(stopSubmit("login", { _error: messages }));
      }
    });
  };
};
// export const getUsers = (currentPage, pageSize) => {
//   return (dispatch) => {
//     dispatch(toggleFetchingAc(true));
//     userApi.getUsers(currentPage, pageSize).then((data) => {
//       dispatch(toggleFetchingAc(false));
//       dispatch(setUsersAc(data.items));
//       dispatch(setTotalPagesAc(data.totalCount));
//     });
//   };
// };
export const logout = () => {
  return (dispatch) => {
    authApi.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserAuthAC(null, null, null, false));
      }
    });
  };
};
export default authReducer;
