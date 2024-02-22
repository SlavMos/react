import React from "react";

import s from "./Profile.module.css";
import myPostContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostContainer
        posts={props.profilePage?.posts}
        newPostText={props.profilePage?.newPostText}
        dispatch={props.dispatch}
        store={props.store}
      />
    </div>
  );
};

export default Profile;
