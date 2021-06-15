import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Header = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <header className={s.header}>
      <img
        className={s.header__icon}
        src="https://e7.pngegg.com/pngimages/593/357/png-clipart-computer-icons-human-resources-human-capital-human-resource-miscellaneous-company.png"
        alt="icon"
      />
      <div>
        {props.isAuth ? (
          <Button
            onClick={props.logout}
            size="small"
            variant="contained"
            style={{ color: green[500] }}
            className={classes.margin}
          >
            Logout
          </Button>
        ) : (
          <NavLink to="/Login">
            <Button
              size="small"
              variant="contained"
              color="secondary"
              className={classes.margin}
            >
              Login
            </Button>
          </NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
