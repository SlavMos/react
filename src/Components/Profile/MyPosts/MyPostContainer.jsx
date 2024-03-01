import React from "react";
import s from "./MyPost.module.css";
import Post from "./Posts/Post";
import { type } from "@testing-library/user-event/dist/type";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../redux/StoreContext";
import store from "../../../redux/redux-store";

const MyPostContainer = () => {
  // let state = store.getState();

  // let addPost = () => {
  //   //создаем функцию которую поставим на баттон(onclick) что бы она выполнилась при нажатии
  //   // ПОКАЗЫВАЕТ ЗНАЧЕНИЕ ТЕКСТАРЕА
  //   //ЧТОБЫ ДОЛГО НЕ ПИСАЛИ ACTION СОЗДАДИМ ФУНКЦИЮ И ПЕРЕКИНЕМ В STATE ОТТУДА СДЕЛАЕМ ЕХПОРТ И ВСТАВИТ ТУТ В ДИСПАТЧ
  //   props.dispatch(addPostActionCreator()); // прокинули через state функцию которая добавляет посты(то что пишем в let text добавляеется в функцию из state)
  //   props.dispatch(updateNewPostTextActionCreator("")); //после добавления поста удаляется текст из texarea
  // };

  // let onPostChange = (text) => {
  //   // cоздали функцию которая меняет value в textarea
  //   props.dispatch(updateNewPostTextActionCreator(text)); //updateNewPostText = функция которая приходит из  state
  // };

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          //создаем функцию которую поставим на баттон(onclick) что бы она выполнилась при нажатии
          // ПОКАЗЫВАЕТ ЗНАЧЕНИЕ ТЕКСТАРЕА
          //ЧТОБЫ ДОЛГО НЕ ПИСАЛИ ACTION СОЗДАДИМ ФУНКЦИЮ И ПЕРЕКИНЕМ В STATE ОТТУДА СДЕЛАЕМ ЕХПОРТ И ВСТАВИТ ТУТ В ДИСПАТЧ
          store.dispatch(addPostActionCreator()); // прокинули через state функцию которая добавляет посты(то что пишем в let text добавляеется в функцию из state)
          store.dispatch(updateNewPostTextActionCreator("")); //после добавления поста удаляется текст из texarea
        };

        let onPostChange = (text) => {
          // cоздали функцию которая меняет value в textarea
          store.dispatch(updateNewPostTextActionCreator(text)); //updateNewPostText = функция которая приходит из  state
        };
        return (
          <MyPost
            updateNewPostTextActionCreator={onPostChange}
            addPostActionCreator={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText} // Добавьте эту строку
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostContainer;
