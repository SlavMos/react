import React from "react";
import s from "./Posts.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
