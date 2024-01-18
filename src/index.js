import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  addMessage,
  addPost,
  changeNewMessage,
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
          state={state}
          addPost={addPost}
          addMessage={addMessage}
          changeNewMessage={changeNewMessage}
          updateNewPostText={updateNewPostText}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};

rerenderEntireTree(state); // нужно вызывать функцию в state чтобы после изменения данных сразу перересовать дерево,но мы не можем --> <-- import не должна быть циклическая зависимость

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
