//ЗАРЕФАКТОРИМ НАШ STATE
//НАША ЗАДАЧА ВСЕ ФУНКЦИИ И ВСЕ ПЕРЕМЕННЫЕ УПАКОВАТЬ В ОДИН ОБЪЕКТ

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
      newMessage: "blablsa",
    },
  },
  getState() {
    // создаем метод который возвращает  нам state(мы не можем на прямую обращаться  к state)//
    return this._state; // к свойствам обращаемся через this
  },
  //функции превращаем в методы уьираем let  = =>

  addPost(postMessage) {
    //созадим функцию котороую прокинем через пропсы к кнопке(эта функция добаввляет новый пост )
    let newPost = {
      id: 5,
      messages: this._state.profilePage.newPostText, //добавляем в посты то значение которою написали в textarera
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost); //пушим в массив в конец массива
    this.rerenderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    //созадим функцию котороую прокинем через пропсы к textarea(эта функция изменяет текст внутри textarea)

    this._state.profilePage.newPostText = newText; //добавляет в newPostTex то что пишем в textarea
    this.rerenderEntireTree(this.state);
  },
  addMessage(dialogMessages) {
    let newMessage = {
      id: 6,
      message: dialogMessages,
    };
    this._state.messagesPage.messegesData.push(newMessage);
    this.rerenderEntireTree(this._state);
  },
  changeNewMessage(newMessage) {
    this._state.messagesPage.newMessage = newMessage;
    this.rerenderEntireTree(this.state);
  },
  rerenderEntireTree() {
    //создали функцию с тем же именем что бы дать ему original function from state чтобы рендерили страницу
  },
  subscribe(observer) {
    //создали функцию которую вызовим в state и передадим ему функцию  rerender (subscribe(rerender))
    this.rerenderEntireTree = observer;
  },
};

export default store;
