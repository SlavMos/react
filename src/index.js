import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "./redux/state";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";
import { rerenderEntireTree } from "./render";

const root = ReactDOM.createRoot(document.getElementById("root"));

rerenderEntireTree(state); // нужно вызывать функцию в state чтобы после изменения данных сразу перересовать дерево,но мы не можем --> <-- import не должна быть циклическая зависимость

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
