import "./App.css";
import "./reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/DIalogs";
import News from "./Components/News/News";
const App = (props) => {
  return (
    <div className="app-wriper">
      <Header />
      <Nav />
      <div className="app-wriper-content">
        <Routes>
          {" "}
          {/* Роуты используем для загрузки новой страницы (ет переключаться по ссылкам)*/}
          <Route
            path="/profile"
            element={
              <Profile
                state={props.state.profilePage}
                addPost={props.addPost}
              />
            }
          />
          <Route
            path="/"
            element={
              <Profile
                state={props.state.profilePage}
                addPost={props.addPost}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={<Dialogs state={props.state.messagesPage} />}
          />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
