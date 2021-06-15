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
    login:state.auth.login,
    photos: state
  };
};
const obj = { width: 10, height: 15 };
// Why is this NaN? Spelling is hard!
const area = obj.width * obj.heigth;
console.log(obj.width);
console.log(obj.heigth);
console.log(area);
export default connect(mapStateToProps, {setUserAuthAC, authMe, logout})(HeaderContainer);
