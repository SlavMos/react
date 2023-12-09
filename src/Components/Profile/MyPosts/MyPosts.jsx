import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPost = () => {
  return (
    <div>
      posts
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
};

export default MyPost;
