import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "John" },
    { id: 2, name: "Sam" },
    { id: 3, name: "Nick" },
    { id: 4, name: "Maluma" },
    { id: 5, name: "Smith" },
  ];

  let dialogsElement = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} /> //map. метод который превращает массив в новый массив,сделали для того что бы каждый раз не добавляли компонент
  ));

  let messegesData = [
    { id: 1, message: "HI" },
    { id: 2, message: "Hello" },
    { id: 3, message: "how are you?" },
    { id: 4, message: "Good,and you?" },
    { id: 5, message: "Good thanks" },
  ];

  let messegesElement = messegesData.map((messeg) => (
    <Message message={messeg.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messegesElement}</div>
    </div>
  );
};

export default Dialogs;
