import "./App.scss";
import MenuToClose from "./images/icons/menu-to-close";
import Slider from "./slider";
import Calendar from "./calendar";
import Events from "./events";
import Values from "./values";
import Goals from "./goals";
import Sidebar from "./sidebar";
import Meeting from "./meeting";
import logo from "./images/logo.png";
import tx from "./images/lone-star.jpg";

function App() {
  return (
    <div className="App nav" id="home">
      <MenuToClose />
      <MyHeader />
      <Sidebar />
      <Slider />
      <Events />
      <Meeting />
      <Calendar />
      <Values />
      <Goals />
      <MyFooter />
    </div>
  );
}

function MyHeader() {
  return (
    <div className="header-container">
      <header className="header">
        <nav>
          <div>
            <a href="#" className="text-logo">
              <h2>FNAVSD</h2>
              {/* <img className="logo" alt="first nighter logo"></img> */}
            </a>
          </div>
          <ul>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#meeting">
              <li>Meetings</li>
            </a>
            <a href="#programs">
              <li>Programs</li>
            </a>
            <a href="#community">
              <li>Community</li>
            </a>
            <a href="#values">
              <li>Values</li>
            </a>
            <a href="#goals">
              <li>Goals</li>
            </a>
          </ul>
        </nav>
      </header>
    </div>
  );
}

function MyFooter() {
  return (
    <div className="footer-container nav" id="meetings">
      <footer className="footer">
        <div>
          {/* <ul className="footer-list-2"></ul> */}
          <div className="credits">
            <div className="gov">
              <a
                href="https://africanvioletsocietyofamerica.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logo} alt="national african violet society"></img>
              </a>
              <a href="https://lsavc.org/" target="_blank" rel="noreferrer">
                <img src={tx} alt="texas african violet society"></img>
              </a>
              <span>
                Developed by
                <a
                  href="https://www.jameshlo.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  James H Lo
                </a>
              </span>
            </div>
            <p>
              © 2024 First Nighter <span>African Violet Society of Dallas</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
