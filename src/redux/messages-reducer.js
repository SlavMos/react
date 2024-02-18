let initialState = {
  dialogsData: [
    { id: 1, name: "John" },
    { id: 2, name: "Sam" },
    { id: 3, name: "Nick" },
    { id: 4, name: "Maluma" },
    { id: 5, name: "Smith" },
  ],

  messegesData: [
    { id: 1, message: "HI" },
    { id: 2, message: "Hello" },
    { id: 3, message: "how are you?" },
    { id: 4, message: "Good,and you?" },
    { id: 5, message: "Good thanks" },
  ],
  newMessage: "",
};

const messagesReducer = (state = initialState, action) => {
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
