const ADD_MESSAGE = "ADD-MESSAGE";
let initialState = {
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
};
export const addNewMessageCreator = (newMessageBody) => {
  return { type: ADD_MESSAGE, newMessageBody };
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      debugger;
      let newMessage = {
        message: action.newMessageBody,
      };
      return {
        ...state,
        messageData: [...state.messageData, newMessage],
      };
    default:
      return state;
  }
};
export default dialogsReducer;
