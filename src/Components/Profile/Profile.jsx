import React from "react";

import s from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost posts={props.posts} />
    </div>
  );
};

export default Profile;
