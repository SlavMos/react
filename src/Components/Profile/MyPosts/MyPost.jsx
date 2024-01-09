import React from "react";
import s from "./MyPost.module.css";
import Post from "./Posts/Post";

const MyPost = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post messages={p.messages} likesCount={p.likesCount} />
  ));
  return (
    <div className={s.MyPost}>
      posts
      <div>
        <textarea name="" id="" cols="15" rows="10"></textarea>
        <button>Add post</button>
      </div>
      {postsElement}
    </div>
  );
};

export default MyPost;
