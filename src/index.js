import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/state";
import {
  addMessage,
  addPost,
  changeNewMessage,
  subscribe,
  updateNewPostText,
} from "./redux/state";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  // создали функцию что бы перересовать дерево заново ui
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={store.getState()} // cтавим () потому что мы вызываем метод в котором state
          addPost={store.addPost.bind(store)} // связываем метод add post s storom что бы ощибок не было
          addMessage={store.addMessage.bind(store)}
          changeNewMessage={store.changeNewMessage.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState()); // нужно вызывать функцию в state чтобы после изменения данных сразу перересовать дерево,но мы не можем --> <-- import не должна быть циклическая зависимость
store.subscribe(rerenderEntireTree); //функция вызвана из state что бы дать ему rerender
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
