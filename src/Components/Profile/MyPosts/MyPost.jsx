import React from "react";
import s from "./MyPost.module.css";
import Post from "./Posts/Post";

const MyPost = () => {
  return (
    <div className={s.MyPost}>
      posts
      <div>
        <textarea name="" id="" cols="15" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <Post message="Hello how are you" likesCount="0" />
      <Post message="Hello are you" likesCount="10" />
    </div>
  );
};

export default MyPost;
