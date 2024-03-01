import React, { createRef } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  addPost,
  addPostActionCreator,
  changeNewMessageActionCreator,
} from "../../redux/messages-reducer";
import Dialogs from "./DIalogs";
import StoreContext from "../../redux/StoreContext";
import store from "../../redux/redux-store";

const DialogsContainer = () => {
  // let state = store.getState();

  // let addMessage = (text) => {
  //   //props.AddMessage(text);
  //   //props.changeNewMessage(text);
  //   //props.dispatch({ type: "ADD-MESSAGE", dialogMessages: text });
  //   //ЧТОБЫ ДОЛГО НЕ ПИСАЛИ ACTION СОЗДАДИМ ФУНКЦИЮ И ПЕРЕКИНЕМ В STATE ОТТУДА СДЕЛАЕМ ЕХПОРТ И ВСТАВИТ ТУТ В ДИСПАТЧ
  //   props.dispatch(addMessageActionCreator(text));
  //   props.dispatch(changeNewMessageActionCreator("")); // обнуление после добавления поста
  // };

  // let changeText = (text) => {
  //   //props.changeNewMessage(text);
  //   props.dispatch(changeNewMessageActionCreator(text));
  // };

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addMessage = (text) => {
          //props.AddMessage(text);
          //props.changeNewMessage(text);
          //props.dispatch({ type: "ADD-MESSAGE", dialogMessages: text });
          //ЧТОБЫ ДОЛГО НЕ ПИСАЛИ ACTION СОЗДАДИМ ФУНКЦИЮ И ПЕРЕКИНЕМ В STATE ОТТУДА СДЕЛАЕМ ЕХПОРТ И ВСТАВИТ ТУТ В ДИСПАТЧ
          store.dispatch(addMessageActionCreator(text));
          store.dispatch(changeNewMessageActionCreator("")); // обнуление после добавления поста
        };

        let changeText = (text) => {
          //props.changeNewMessage(text);
          store.dispatch(changeNewMessageActionCreator(text));
        };
        return (
          <Dialogs
            addMessageActionCreator={addMessage}
            changeNewMessageActionCreator={changeText}
            dialogsData={state.messagesPage.dialogsData}
            messegesData={state.messagesPage.messegesData}
            value={state.messagesPage.newMessage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
