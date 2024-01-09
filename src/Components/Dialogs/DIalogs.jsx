import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  console.log(props);
  let dialogsElement = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} /> //map. метод который превращает массив в новый массив,сделали для того что бы каждый раз не добавляли компонент
  ));

  let messegesElement = props.messegesData.map((messeg) => (
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
