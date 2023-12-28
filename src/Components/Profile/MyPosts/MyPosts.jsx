import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPost = () => {
  return (
    <div>
      posts
      <div>
        <textarea name="" id="" cols="15" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <Post message="Hello how are you" />
      <Post message="Hello  are you" />
    </div>
  );
};

export default MyPost;
