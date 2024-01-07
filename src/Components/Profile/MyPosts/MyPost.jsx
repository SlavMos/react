import React from "react";
import s from "./MyPost.module.css";
import Post from "./Posts/Post";

const MyPost = () => {
  let posData = [
    { id: 0, messages: "Hello how are you", likesCount: 1 },
    { id: 1, messages: "Hyyyy,okay", likesCount: 15 },
  ];

  return (
    <div className={s.MyPost}>
      posts
      <div>
        <textarea name="" id="" cols="15" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <Post messages={posData[0].messages} likesCount={posData[0].likesCount} />
      <Post messages={posData[1].messages} likesCount={posData[1].likesCount} />
    </div>
  );
};

export default MyPost;
