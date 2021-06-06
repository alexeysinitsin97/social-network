import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { authMe, setUserAuthAC } from "../../redux/auth-reducer";
import Header from "./Header";
import s from "./Header.module.css";
import authApi from "../Api/authApi";
import {logout} from "../../redux/auth-reducer";
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return {
    isAuth:state.auth.isAuth,
    login:state.auth.login
  };
};
export default connect(mapStateToProps, {setUserAuthAC, authMe, logout})(HeaderContainer);
