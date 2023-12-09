import "./App.css";
import Content from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";

const App = () => {
  return (
    <div className="app-wriper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
};

export default App;
