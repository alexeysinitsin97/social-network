import React from "react";
import s from "./SideBar.module.css";
const SideBar = () => {
  return (
    <div className={s.content}>
      <div className ={s.friend__title}>Friends</div>
      <div className={s.friends}>
        <div className={s.item}>
          <span className={s.icon}></span>
          <div>Alex</div>
        </div>
        <div className={s.item}>
          <span className={s.icon}></span>
          <div>Timo</div>
        </div>
        <div className={s.item}>
          <span className={s.icon}></span>
          <div>Glen</div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
