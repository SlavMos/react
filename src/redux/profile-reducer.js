//ДЛЯ ТОГО ЧТО БЫ НЕ БЫЛО МНОГО METODOV V DISPATCH(ACTION) МЫ СОЗДАЕМ REDUCER
//REDUCER-ЖТО ЧИСТАЯ ФУНКЦИЯ КОТОРАЯ ПРИНИМАЕТ STATE AND ACTION,ЕСЛИ НУЖНО ОН ИЗМЕНЯЕТ STATE И ВЕРНЕТ НОВЫЙ В STATE,ИНАЧЕ ОН ОСТАВИТ СТАРЫЙ
//У КАЖДОГО ЧАСТЯ STATE СВОЙ РЕДЮСЕР
let initialState = {
  posts: [
    { id: 0, messages: "Hello how are you", likesCount: 1 },
    { id: 1, messages: "Hyyyy,okay", likesCount: 15 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  //action-объект
  // у actioona объязательно должен быть type  {type:}
  if (action.type === "ADD-POST") {
    //МЫ КОПИРОВАЛИ ФУНКЦИЮ ADDPOST
    //созадим функцию котороую прокинем через пропсы к кнопке(эта функция добаввляет новый пост )
    let newPost = {
      id: 5,
      messages: state.newPostText, //добавляем в посты то значение которою написали в textarera
      likesCount: 0,
    };
    state.posts.push(newPost); //пушим в массив в конец массива
  } else if (action.type === "UPDATE-NEW-POST-TEXT") {
    state.newPostText = action.newText; //добавляет в newPostTex то что пишем в textarea
  }
  return state;
};

//ЧТОБЫ ДОЛГО НЕ ПИСАЛИ ACTION СОЗДАДИМ ФУНКЦИЮ (ACTION) И  СДЕЛАЕМ ЕХПОРТ И ВСТАВИМ В dispatch
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

export default profileReducer;
