import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="John" id="1" />
        <DialogItem name="Sam" id="2" />
        <DialogItem name="Nick" id="3" />
        <DialogItem name="Maluma" id="4" />
        <DialogItem name="Smith" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="HI" />
        <Message message="Hello" />
        <Message message="how are you?" />
        <Message message="Good,and you?" />
        <Message message="Good thanks" />
      </div>
    </div>
  );
};

export default Dialogs;
