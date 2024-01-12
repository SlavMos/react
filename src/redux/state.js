let state = {
  profilePage: {
    posts: [
      { id: 0, messages: "Hello how are you", likesCount: 1 },
      { id: 1, messages: "Hyyyy,okay", likesCount: 15 },
    ],
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
  },
};

export let addPost = (postMessage) => {
  //созадим функцию котороую прокинем через пропсы к кнопке(эта функция добаввляет новый пост )
  let newPost = {
    id: 5,
    messages: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost); //пушим в массив в конец массива
};

export default state;
