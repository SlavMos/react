import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  console.log(props);
  let dialogsElement = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} /> //map. метод который превращает массив в новый массив,сделали для того что бы каждый раз не добавляли компонент
  ));

  let messegesElement = props.state.messegesData.map((messeg) => (
    <Message message={messeg.message} /> // <Message message={messeg.message} /> message statin danninerun michi messagne/messegna mapin hamare
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messegesElement}</div>
    </div>
  );
};

export default Dialogs;
