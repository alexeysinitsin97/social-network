import React from "react";
import s from "./User.module.css";
import User from "./User";
import Pagination from "../common/Paginations/Pagination";

let Users = (props) => {
  return (
    <div>
      <Pagination props={props}/>
      {props.users.map((u) => {
        return <User u={u} props={props} />;
      })}
    </div>
  );
};

export default Users;
