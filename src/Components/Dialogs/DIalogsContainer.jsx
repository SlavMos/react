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

const DialogsContainer = (props) => {
  let dialogsElement = (props.state?.dialogsData || []).map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} /> //map. метод который превращает массив в новый массив,сделали для того что бы каждый раз не добавляли компонент name={dialog.names} = name eto props peredaem
  ));

  let messegesElement = (props.state?.messegesData || []).map((messeg) => (
    <Message message={messeg.message} /> // <Message message={messeg.message} /> message statin danninerun michi messagne/messegna mapin hamare
  ));

  let newText = React.createRef();

  let addMessage = (text) => {
    //props.AddMessage(text);
    //props.changeNewMessage(text);
    //props.dispatch({ type: "ADD-MESSAGE", dialogMessages: text });
    //ЧТОБЫ ДОЛГО НЕ ПИСАЛИ ACTION СОЗДАДИМ ФУНКЦИЮ И ПЕРЕКИНЕМ В STATE ОТТУДА СДЕЛАЕМ ЕХПОРТ И ВСТАВИТ ТУТ В ДИСПАТЧ
    props.dispatch(addMessageActionCreator(text));
    props.dispatch(changeNewMessageActionCreator("")); // обнуление после добавления поста
  };

  let changeText = (text) => {
    //props.changeNewMessage(text);
    props.dispatch(changeNewMessageActionCreator(text));
  };

  return (
    <Dialogs
      addMessageActionCreator={addMessage}
      changeNewMessageActionCreator={changeText}
      dialogsData={props.state.dialogsData}
      messegesData={props.state.messegesData}
      value={props.state.newMessage}
    />
  );
};

export default DialogsContainer;
