import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {

  return (
    <header className={s.header}>
      <img
        className={s.header__icon}
        src="https://e7.pngegg.com/pngimages/593/357/png-clipart-computer-icons-human-resources-human-capital-human-resource-miscellaneous-company.png"
        alt="icon"
      />
      <div>
        {props.isAuth? <button onClick = {props.logout}>Logout</button>:<NavLink to="/Login">Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
