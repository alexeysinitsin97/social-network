import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        { name: "Alex", id: "1" },
        { name: "Ksenya", id: "2" },
        { name: "Kirill", id: "3" },
      ],
      messageData: [
        { message: "Hey!" },
        { message: "What are you doing?!!" },
        { message: "Visited 21.07.2021!" },
      ],
      newMessageBody: "",
    },
    profilePage: {
      postData: [
        { message: "Hey how are you?", likeCount: 11 },
        { message: "Say some1", likeCount: 121 },
      ],
      newPostText: "",
    },
  },
  getState() {
    return this._state;
  },
  _rerender() {
    console.log("state changed");
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._rerender(this._state);
  },
  subscriber(observer) {
    this._rerender = observer;
  },
};

window.store = store;
export default store;
