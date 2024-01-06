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
  let dialogsData = [
    { id: 1, name: "John" },
    { id: 2, name: "Sam" },
    { id: 3, name: "Nick" },
    { id: 4, name: "Maluma" },
    { id: 5, name: "Smith" },
  ];

  let messegesData = [
    { id: 1, message: "HI" },
    { id: 2, message: "Hello" },
    { id: 3, message: "how are you?" },
    { id: 4, message: "Good,and you?" },
    { id: 5, message: "Good thanks" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={s.messages}>
        <Message message={messegesData[0].message} />
        <Message message={messegesData[1].message} />
        <Message message={messegesData[2].message} />
        <Message message={messegesData[3].message} />
        <Message message={messegesData[4].message} />
      </div>
    </div>
  );
};

export default Dialogs;
