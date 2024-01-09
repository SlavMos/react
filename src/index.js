import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
let posts = [
  { id: 0, messages: "Hello how are you", likesCount: 1 },
  { id: 1, messages: "Hyyyy,okay", likesCount: 15 },
];

let dialogsData = [
  { id: 1, name: "John" },
  { id: 2, name: "Sam" },
  { id: 3, name: "Nick" },
  { id: 4, name: "Maluma" },
  { id: 5, name: "Smith" },
];

let messegesData = [
  { id: 1, message: "HI" },
  { id: 2, message: "Hello" },
  { id: 3, message: "how are you?" },
  { id: 4, message: "Good,and you?" },
  { id: 5, message: "Good thanks" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messegesData={messegesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
