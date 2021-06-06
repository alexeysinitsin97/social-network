import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";
import SideBar from "./SideBar/SideBar";
const Nav = () => {
  return (
    <nav className={s.nav}>
      <div>
        <div className={s.item}>
          <NavLink to="/Profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/Dialogs" activeClassName={s.active}>
            Message
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/Users" activeClassName={s.active}>
            Users
          </NavLink>
        </div>
        <div className={s.item}>
          <a href="#">News</a>
        </div>
        <div className={s.item}>
          <a href="#">Music</a>
        </div>
        <div className={s.item}>
          <a href="#">Settings</a>
        </div>
        <SideBar />
      </div>
    </nav>
  );
};
export default Nav;
