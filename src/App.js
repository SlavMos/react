import "./App.css";

import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/DIalogs";

const App = () => {
  return (
    <div className="app-wriper">
      <Header />
      <Nav />
      <Dialogs />
      {/* <Profile /> */}
    </div>
  );
};
export default App;
