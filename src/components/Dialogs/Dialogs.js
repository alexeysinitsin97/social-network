import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../utils/validation/FormValid";
import { FormControl, Textarea } from "../common/FormControl/FormControl";

const Dialogs = (props) => {
  let onSubmit = (data) => {
    alert(data.newMessage);
    props.sendMessage(data.newMessage);
  };

  let dialogsElements = props.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messageElements = props.messageData.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={s.messages}>{messageElements}</div>
        <AddNewMessageFormRedux onSubmit={onSubmit} />
      </div>
    </div>
  );
};
const maxLength50 = maxLengthCreator(50);
const AddNewMessageForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field
          component={Textarea}
          placeholder="Enter your message here"
          name="newMessage"
          validate={[required, maxLength50]}
        />
        <div>
          <button>Send message</button>
        </div>
      </form>
    </div>
  );
};
const AddNewMessageFormRedux = reduxForm({ form: "newMessage" })(
  AddNewMessageForm
);
export default Dialogs;
