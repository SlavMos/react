//ЗАРЕФАКТОРИМ НАШ STATE
//НАША ЗАДАЧА ВСЕ ФУНКЦИИ И ВСЕ ПЕРЕМЕННЫЕ УПАКОВАТЬ В ОДИН ОБЪЕКТ

import messagesReducer from "./messages-reducer";
import profileeReducer from "./profile-reducer";

//CОЗДАЕМ ОБЪЕКТ STORE

let store = {
  //state становится свойством
  _state: {
    //делаем приватным чтобы из вмне небыл к енму доступ

    profilePage: {
      posts: [
        { id: 0, messages: "Hello how are you", likesCount: 1 },
        { id: 1, messages: "Hyyyy,okay", likesCount: 15 },
      ],
      newPostText: "",
    },

    messagesPage: {
      dialogsData: [
        { id: 1, name: "John" },
        { id: 2, name: "Sam" },
        { id: 3, name: "Nick" },
        { id: 4, name: "Maluma" },
        { id: 5, name: "Smith" },
      ],

      messegesData: [
        { id: 1, message: "HI" },
        { id: 2, message: "Hello" },
        { id: 3, message: "how are you?" },
        { id: 4, message: "Good,and you?" },
        { id: 5, message: "Good thanks" },
      ],
      newMessage: "",
    },
  },
  getState() {
    // создаем метод который возвращает  нам state(мы не можем на прямую обращаться  к state)//
    return this._state; // к свойствам обращаемся через this
  },
  //функции превращаем в методы уьираем let  = =>
  rerenderEntireTree() {
    //создали функцию с тем же именем что бы дать ему original function from state чтобы рендерили страницу
  },
  subscribe(observer) {
    //создали функцию которую вызовим в state и передадим ему функцию  rerender (subscribe(rerender))
    this.rerenderEntireTree = observer;
  },

  // ЧТОБЫ МНОГО РАЗ НЕ ВЫЗЫВАТЬ МЕТОДЫ(ФУНКЦИИ) КОТОРЫЕ ЧТО ТО ИЗМЕНЯЮТ В UI(state) МЫ СОЗДАДИМ ОДИН МЕТОД В КОТОРОМ ДОБАВИМ ВСЕ МЕТОДЫ И БУДЕМ ВЫЗЫЫВАТЬ ТОЛЬКО ОДИН
  dispatch(action) {
    profileeReducer(this._state.profilePage, action);
    messagesReducer(this._state.messagesPage, action);
    this.rerenderEntireTree(this._state);
    //
    //REDUCER
    //action-объект
    // у actioona объязательно должен быть type  {type:}
    // if (action.type === "ADD-POST") {
    //   //МЫ КОПИРОВАЛИ ФУНКЦИЮ ADDPOST
    //   //созадим функцию котороую прокинем через пропсы к кнопке(эта функция добаввляет новый пост )
    //   let newPost = {
    //     id: 5,
    //     messages: this._state.profilePage.newPostText, //добавляем в посты то значение которою написали в textarera
    //     likesCount: 0,
    //   };
    //   this._state.profilePage.posts.push(newPost); //пушим в массив в конец массива
    //   this.rerenderEntireTree(this._state);
    // } else if (action.type === "UPDATE-NEW-POST-TEXT") {
    //   this._state.profilePage.newPostText = action.newText; //добавляет в newPostTex то что пишем в textarea
    //   this.rerenderEntireTree(this._state);
    // } else if (action.type === "ADD-MESSAGE") {
    //   let newMessage = {
    //     id: 6,
    //     message: action.dialogMessages,
    //   };
    //   this._state.messagesPage.messegesData.push(newMessage);
    //   this.rerenderEntireTree(this._state);
    // } else if (action.type === "CHANGE-NEW-MESSAGE") {
    //   this._state.messagesPage.newMessage = action.newMessage;
    //   this.rerenderEntireTree(this._state);
    // }
  },

  // addPost(postMessage) {
  //   //созадим функцию котороую прокинем через пропсы к кнопке(эта функция добаввляет новый пост )
  //   let newPost = {
  //     id: 5,
  //     messages: this._state.profilePage.newPostText, //добавляем в посты то значение которою написали в textarera
  //     likesCount: 0,
  //   };
  //   this._state.profilePage.posts.push(newPost); //пушим в массив в конец массива
  //   this.rerenderEntireTree(this._state);
  // },
  // updateNewPostText(newText) {
  //   //созадим функцию котороую прокинем через пропсы к textarea(эта функция изменяет текст внутри textarea)

  //   this._state.profilePage.newPostText = newText; //добавляет в newPostTex то что пишем в textarea
  //   this.rerenderEntireTree(this._state);
  // },
  // addMessage(dialogMessages) {
  //   let newMessage = {
  //     id: 6,
  //     message: dialogMessages,
  //   };
  //   this._state.messagesPage.messegesData.push(newMessage);
  //   this.rerenderEntireTree(this._state);
  // },
  // changeNewMessage(newMessage) {
  //   this._state.messagesPage.newMessage = newMessage;
  //   this.rerenderEntireTree(this._state);
  // },
};

//ЧТОБЫ ДОЛГО НЕ ПИСАЛИ ACTION СОЗДАДИМ ФУНКЦИЮ И ПЕРЕКИНЕМ В STATE ОТТУДА СДЕЛАЕМ ЕХПОРТ И ВСТАВИМ В dispatch

export const addMessageActionCreator = (text) => {
  return {
    type: "ADD-MESSAGE",
    dialogMessages: text,
  };
};

export const changeNewMessageActionCreator = (text) => {
  return {
    type: "CHANGE-NEW-MESSAGE",
    newMessage: text,
  };
};

export const addPostActionCreator = () => {
  return {
    type: "ADD-POST",
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText: text,
  };
};

export default store;
