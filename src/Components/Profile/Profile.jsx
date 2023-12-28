import React from "react";

import s from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Sins9MyrQH_gpOpTdF5h12rMM-1_0JQ1vaXosGKe6YgYTtOO6KQmLbVToKCniw2JrSU&usqp=CAU"
          alt=""
        />
      </div>
      <div>ava + discrip</div>
      <MyPost />
    </div>
  );
};

export default Profile;
