import { stopSubmit } from "redux-form";
import authApi from "../components/Api/authApi";
import { authMe } from "./auth-reducer";
const INITIALIZED_SUCSESS = "INITIALIZED_SUCSESS";
let initialState = {
  initialized: false,
};
export const initializedAC = () => {
  return {
    type: INITIALIZED_SUCSESS,
  };
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCSESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSucsess = () => {
  return (dispatch) => {
    let promise = dispatch(authMe);

    Promise.all([promise]).then(() => {
      dispatch(initializedAC());
    });
  };
};

export default appReducer;
