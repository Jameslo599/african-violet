import "./App.scss";
import logo from "./images/logo.png";
import MenuToClose from "./images/icons/menu-to-close";
import Slider from "./slider";
import Calendar from "./calendar";

function App() {
  return (
    <div className="App">
      <MyHeader />
      <Slider />
      <Calendar />
      <div className="dummy"></div>
    </div>
  );
}

function MyHeader() {
  return (
    <div className="header-container">
      <header className="header">
        <nav>
          <div>
            <a href="#">
              <img className="logo" alt="capital one logo" src={logo}></img>
            </a>
          </div>
          <div className="header-support">
            <MenuToClose />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
