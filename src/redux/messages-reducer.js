const messagesReducer = (state, action) => {
  if (action.type === "ADD-MESSAGE") {
    let newMessage = {
      id: 6,
      message: action.dialogMessages,
    };
    state.messegesData.push(newMessage);
  } else if (action.type === "CHANGE-NEW-MESSAGE") {
    state.newMessage = action.newMessage;
  }
  return state;
};

export default messagesReducer;
