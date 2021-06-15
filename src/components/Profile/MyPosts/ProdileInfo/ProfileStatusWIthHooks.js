import React, { useEffect, useState } from "react";

let ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  const activetedEdit = () => {
    setEditMode(true);
  };
  const deactivetedEdit = () => {
    setEditMode(false);
  };
  const changeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  return (
    <div>
      {editMode ? (
        <input
          onChange={changeStatus}
          autoFocus={true}
          value={status}
          onBlur={() => {
            deactivetedEdit();
            props.updateProfileStatus(status);
          }}
        />
      ) : (
        <span onDoubleClick={activetedEdit}>
        <b>Status: </b>
          {props.status || "empty status"}
        </span>
      )}
    </div>
  );
};
export default ProfileStatusWithHooks;
