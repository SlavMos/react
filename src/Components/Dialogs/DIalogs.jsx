import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">John</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Ri</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Poo</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Smack</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Sam</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hy!</div>
        <div className={s.message}>Ok</div>
        <div className={s.message}>No thanks</div>
        <div className={s.message}>Ahahah,okay</div>
        <div className={s.message}> Bro,wtf? </div>
      </div>
    </div>
  );
};

export default Dialogs;
