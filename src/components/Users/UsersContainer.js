import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAc,
  setTotalPagesAc,
  setCurrentPageAc,
  toggleFetchingAc,
  followingInProgressAC,
  requestUsers,
  following,
  unfollowing,
} from "../../redux/user-reducer";
import {
  getUsers,
  getCurrentPage,
  getTotalPages,
  getPageSize,
  getIsFetching,
  getFollowingInProgress,
  getFollowingInUserId,
} from "../../redux/user-selectors";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../HOC/RedirectContainer";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    totalPages: getTotalPages(state),
    pageSize: getPageSize(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    followingInUserId: getFollowingInUserId(state),
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAc(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAc(currentPage));
    },
    setTotalPages: (totalPages) => {
      dispatch(setTotalPagesAc(totalPages));
    },
    toggleFetching: (isFetching) => {
      dispatch(toggleFetchingAc(isFetching));
    },
    toggleFollowingInProgress: (followingInProgress, id) => {
      dispatch(followingInProgressAC(followingInProgress, id));
    },
    requestUsers: (currentPage, pageSize) => {
      dispatch(requestUsers(currentPage, pageSize));
    },
    following: (userId) => {
      dispatch(following(userId));
    },
    unfollowing: (userId) => {
      dispatch(unfollowing(userId));
    },
  };
};
class UserContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalPages={this.props.totalPages}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          currentPage={this.props.currentPage}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          followingInProgress={this.props.followingInProgress}
          followingInUserId={this.props.followingInUserId}
          following={this.props.following}
          unfollowing={this.props.unfollowing}
        />
      </>
    );
  }
}
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(UserContainer);

// const UsersContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UserContainer);
// let UsersRedirectContainer = withAuthRedirect(UsersContainer);
// export default UsersRedirectContainer;
