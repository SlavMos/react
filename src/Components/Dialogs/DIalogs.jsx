import React, { createRef } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addPost } from "../../redux/state";

const Dialogs = (props) => {
  console.log(props);
  let dialogsElement = props.state?.dialogsData?.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} /> //map. метод который превращает массив в новый массив,сделали для того что бы каждый раз не добавляли компонент name={dialog.names} = name eto props peredaem
  ));

  let messegesElement = props.state?.messegesData?.map((messeg) => (
    <Message message={messeg.message} /> // <Message message={messeg.message} /> message statin danninerun michi messagne/messegna mapin hamare
  ));

  let newText = React.createRef();

  let addMessage = () => {
    let text = newText.current.value;
    props.dispatch({ type: "ADD-MESSAGE", dialogMessages: text });
    props.dispatch({ type: "CHANGE-NEW-MESSAGE", newMessage: "" });
  };
  let changeText = () => {
    let text = newText.current.value;
    props.dispatch({ type: "CHANGE-NEW-MESSAGE", newMessage: text });
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messegesElement}</div>
      <textarea
        ref={newText}
        onChange={changeText}
        value={props.state?.newMessage}
      ></textarea>
      <button className={s.change} onClick={addMessage}>
        d
      </button>
    </div>
  );
};

export default Dialogs;
