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
      <Post messages="Hello how are you" likesCount="0" />
      <Post messages="Hello are you" likesCount="10" />
    </div>
  );
};

export default MyPost;
