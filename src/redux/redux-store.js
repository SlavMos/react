import { combineReducers, createStore } from "redux";

import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

let store = createStore(
  combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
  })
);

export default store;
