import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 0, messages: "Hello how are you", likesCount: 1 },
      { id: 1, messages: "Hyyyy,okay", likesCount: 15 },
    ],
    newPostText: "TEXT V TEXT AREA",
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
    newMessage: "blablsa",
  },
};

export let addPost = (postMessage) => {
  //созадим функцию котороую прокинем через пропсы к кнопке(эта функция добаввляет новый пост )
  let newPost = {
    id: 5,
    messages: state.profilePage.newPostText, //добавляем в посты то значение которою написали в textarera
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost); //пушим в массив в конец массива
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  //созадим функцию котороую прокинем через пропсы к textarea(эта функция изменяет текст внутри textarea)

  state.profilePage.newPostText = newText; //добавляет в newPostTex то что пишем в textarea
  rerenderEntireTree(state);
};

export let addMessage = (dialogMessages) => {
  let newMessage = {
    id: 6,
    message: dialogMessages,
  };
  state.messagesPage.messegesData.push(newMessage);
  rerenderEntireTree(state);
};

export let changeNewMessage = (newMessage) => {
  state.messagesPage.newMessage = newMessage;
  rerenderEntireTree(state);
};

export default state;
