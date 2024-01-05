import React from "react";
import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div className={s.sl}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Sins9MyrQH_gpOpTdF5h12rMM-1_0JQ1vaXosGKe6YgYTtOO6KQmLbVToKCniw2JrSU&usqp=CAU"
          alt=""
        />
      </div>
      <div>ava + discrip</div>
    </div>
  );
};

export default ProfileInfo;
