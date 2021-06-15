import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  setProfile,
  setUserProfile,
  getUserProfileStatus,
  updateProfileStatus,
  savePhoto,
  saveProfile
  
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../HOC/RedirectContainer";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.setUserProfile(userId);
    this.props.getUserProfileStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId != this.props.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile {...this.props} isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}/>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    userId: state.auth.userId,

    // props: { ...state.props },
  };
};
export default compose(
  connect(mapStateToProps, {
    setProfile,
    setUserProfile,
    getUserProfileStatus,
    updateProfileStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let ProfileRouterContainer = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { setProfile, setUserProfile })(ProfileRouterContainer);
