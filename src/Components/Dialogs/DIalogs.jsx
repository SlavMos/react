import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>John</div>
        <div className={s.dialog}>Ri</div>
        <div className={s.dialog}>Poo</div>
        <div className={s.dialog}>Smack</div>
        <div className={s.dialog}>Sam</div>
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
