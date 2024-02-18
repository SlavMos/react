import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
// import store, {
//   addMessage,
//   addPost,
//   changeNewMessage,
//   subscribe,
//   updateNewPostText,
// } from "./redux/store";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  // создали функцию что бы перересовать дерево заново ui
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={store.getState()} // cтавим () потому что мы вызываем метод в котором state
          dispatch={store.dispatch.bind(store)} // связываем метод dispatch s storom что бы ошибок не было
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState()); // нужно вызывать функцию в state чтобы после изменения данных сразу перересовать дерево,но мы не можем --> <-- import не должна быть циклическая зависимость
//store.subscribe(rerenderEntireTree); //функция вызвана из state что бы дать ему rerender
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
