import React from "react";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let User = ({u, props}) => {
  return (
    <div key={u.id}>
      <span>
        <NavLink to={`/Profile/${u.id}`}>
          <div>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} />
          </div>
        </NavLink>
        <div>
          {u.followed ? (
            <button
              disabled={props.followingInUserId.some((id) => id === u.id)}
              onClick={() => {
                props.unfollowing(u.id);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              disabled={props.followingInUserId.some((id) => id === u.id)}
              onClick={() => {
                props.following(u.id);
              }}
            >
              follow
            </button>
          )}
        </div>
      </span>
      <span>
        <NavLink to={`/Profile/${u.id}`}>
          <div>{u.name}</div>
          <div>{"u.loction.city"}</div>
          <div>{"u.loction.country"}</div>
        </NavLink>
      </span>
    </div>
  );
};

export default User;
