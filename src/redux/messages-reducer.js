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
//ЧТОБЫ ДОЛГО НЕ ПИСАЛИ ACTION СОЗДАДИМ ФУНКЦИЮ И  СДЕЛАЕМ ЕХПОРТ И ВСТАВИМ В dispatch
//action creator
export const addMessageActionCreator = (text) => {
  return {
    type: "ADD-MESSAGE",
    dialogMessages: text,
  };
};

export const changeNewMessageActionCreator = (text) => {
  return {
    type: "CHANGE-NEW-MESSAGE",
    newMessage: text,
  };
};

export default messagesReducer;
