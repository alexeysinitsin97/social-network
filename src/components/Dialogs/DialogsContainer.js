import React from "react";
import {
  addNewMessageCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../HOC/RedirectContainer";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messageBody: state.dialogsPage.newMessageBody,
    messageData: state.dialogsPage.messageData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(addNewMessageCreator(newMessageBody));
    }
  };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
let DialogsAuthRedirectContainer = withAuthRedirect(DialogsContainer);
export default DialogsAuthRedirectContainer;
