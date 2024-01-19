import "./App.scss";
import logo from "./images/logo.png";
import tx from "./images/lone-star.jpg";
import MenuToClose from "./images/icons/menu-to-close";
import Slider from "./slider";
import Calendar from "./calendar";
import Events from "./events";
import Values from "./values";
import Goals from "./goals";
import Logo from "./logo-strip";
import Sidebar from "./sidebar";

function App() {
  return (
    <div className="App nav" id="home">
      <MenuToClose />
      <MyHeader />
      <Sidebar />
      <Slider />
      <Calendar />
      <Events />
      <Values />
      <Goals />
      <Logo />
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
            <a href="#">
              <img className="logo" alt="first nighter logo" src={logo}></img>
            </a>
          </div>
          <ul>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#community">
              <li>Community</li>
            </a>
            <a href="#programs">
              <li>Programs</li>
            </a>
            <a href="#values">
              <li>Values</li>
            </a>
            <a href="#goals">
              <li>Goals</li>
            </a>
            <a href="#meetings">
              <li>Meetings</li>
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
          <h3>Meeting Information</h3>
          <div className="schedule">
            <div>
              <span>Every Third Monday</span>
              <span>January - May & September - November</span>
            </div>
            <div>
              <span>6:30-7:00 p.m. Social Time</span>
              <span>7:00-8:30 p.m. Business Meeting & Program</span>
            </div>
            <div>
              <span>McKinney Fire Station 5, Community Room</span>
              <span>6600 Virginia Parkway, McKinney, TX</span>
            </div>
          </div>
          <div className="schedule-wide">
            <div>
              <span>Every Third Monday</span>
              <span>January - May</span>
              <span>September - November</span>
            </div>
            <div>
              <span>Social Time</span>
              <span>6:30-7:00 p.m.</span>
              <span>Business Meeting & Program</span>
              <span>7:00-8:30 p.m.</span>
            </div>
            <div>
              <span>McKinney Fire Station 5</span>
              <span>Community Room</span>
              <span>6600 Virginia Parkway</span>
              <span>McKinney, TX</span>
            </div>
          </div>
          <ul className="footer-list-2"></ul>
          <div className="credits">
            <p>
              © 2024 First Nighter <span>African Violet Society of Dallas</span>
            </p>
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
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
