import React from "react";
import s from "./MyPost.module.css";
import Post from "./Posts/Post";
import { type } from "@testing-library/user-event/dist/type";

const MyPost = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post messages={p.messages} likesCount={p.likesCount} /> // при помощи map сосдаем новый массив который будет все элементы из старого(для того чтобы много раз не добавлять компонету)
  ));

  let newPostElement = React.createRef(); //создаем ссылку

  let addPost = () => {
    //создаем функцию которую поставим на баттон(onclick) что бы она выполнилась при нажатии
    // ПОКАЗЫВАЕТ ЗНАЧЕНИЕ ТЕКСТАРЕА
    props.dispatch({ type: "ADD-POST" }); // прокинули через state функцию которая добавляет посты(то что пишем в let text добавляеется в функцию из state)
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: "" }); //после добавления поста удаляется текст из texarea
  };

  let onPostChange = () => {
    let text = newPostElement.current.value; // cоздали функцию которая меняет value в textarea
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text }); //updateNewPostText = функция которая приходит из  state
  };

  return (
    <div className={s.MyPost}>
      posts
      <div>
        <textarea
          ref={newPostElement} //ссылка чтобы мы могли обратиться к нему
          value={props.newPostElement} // значение приходит из state
          onChange={onPostChange} // что бы могли менять текст внутри(когда изменяеися текст ареа применяется onpostChange)
        ></textarea>
        {/* добавили ссылку на
        textarea что бы могли обратиться к нему */}
        <button
          onClick={addPost} //onclick позволяет кликать по кнопкеfd ADDPOST Это функция которую добавили к кнопке
        >
          Add post
        </button>
      </div>
      {postsElement}
    </div>
  );
};

export default MyPost;
