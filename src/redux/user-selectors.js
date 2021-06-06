export const getUsers = (state) => {
  return state.userPage.users;
}
export const getCurrentPage = (state) => {
  return state.userPage.currentPage;
}
export const getTotalPages = (state) => {
  return state.userPage.totalPages;
}
export const getPageSize = (state) => {
  return state.userPage.pageSize;
}
export const getIsFetching = (state) => {
  return state.userPage.isFetching;
}
export const getFollowingInProgress = (state) => {
  return state.userPage.followingInProgress;
}
export const getFollowingInUserId = (state) => {
  return state.userPage.followingInUserId;
}


