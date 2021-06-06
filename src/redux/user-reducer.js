import userApi from "../components/Api/userApi";
import followApi from "../components/Api/followApi";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING = "TOGGLE_FOLLOWING";
let initialState = {
  users: [],
  currentPage: "1",
  totalPages: "20",
  pageSize: "10",
  isFetching: true,
  followingInProgress: false,
  followingInUserId: [],
};
export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId: userId,
  };
};
export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  };
};
export const setUsersAc = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAc = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const toggleFetchingAc = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const setTotalPagesAc = (totalPages) => ({
  type: SET_TOTAL_COUNT,
  totalPages,
});
export const followingInProgressAC = (followingInProgress, id) => ({
  type: TOGGLE_FOLLOWING,
  followingInProgress: followingInProgress,
  id: id,
});
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: [...state.users].map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: [...state.users].map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalPages: action.totalPages,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING:
      debugger;
      return {
        ...state,
        followingInProgress: action.followingInProgress,
        followingInUserId: action.followingInProgress
          ? [...state.followingInUserId, action.id]
          : [...state.followingInUserId.filter((id) => id != action.id)],
      };
    default:
      return state;
  }
};
export const requestUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleFetchingAc(true));
    userApi.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleFetchingAc(false));
      dispatch(setUsersAc(data.items));
      dispatch(setTotalPagesAc(data.totalCount));
    });
  };
};
export const following = (userId) => {
  return (dispatch) => {
    dispatch(followingInProgressAC(true, userId));
    followApi.doFollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followAC(userId));
        dispatch(followingInProgressAC(false, userId));
      }
    });
  };
};
export const unfollowing = (userId) => {
  return (dispatch) => {
    dispatch(followingInProgressAC(true, userId));
    followApi.doUnfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowAC(userId));
        dispatch(followingInProgressAC(false, userId));
      }
    });
  };
};
export default usersReducer;
