import React from "react";
import s from "./Posts.module.css";
const Posts = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://i.pinimg.com/736x/2b/81/6b/2b816b41c523df39ae22caa38e1f6586--square.jpg"
        className={s.icon}
      />
      {props.message}
    </div>
  );
};
export default Posts;
