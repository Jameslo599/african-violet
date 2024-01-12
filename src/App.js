import "./App.scss";
import logo from "./images/logo.png";
import tx from "./images/lone-star.jpg";
import MenuToClose from "./images/icons/menu-to-close";
import Slider from "./slider";
import Calendar from "./calendar";
import Logo from "./logo-strip";

function App() {
  return (
    <div className="App">
      <MyHeader />
      <Slider />
      <Calendar />
      <MyValues />
      <Logo />
      <div className="dummy"></div>
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
          <div className="header-support">
            <MenuToClose />
          </div>
        </nav>
      </header>
    </div>
  );
}

function MyValues() {
  return (
    <div className="values-container">
      <div>
        <div>
          <h3>
            Our <span className="italic">Aim</span>
          </h3>
          <span>
            To promote widespread interest in African Violets and to study their
            growth habits.
          </span>
        </div>
        <div>
          <h3>
            Our <span className="italic">Purpose</span>
          </h3>
          <span>
            To offer a beneficial association to those interested in African
            Violet culture.
          </span>
        </div>
        <figure></figure>
      </div>
    </div>
  );
}

function MyFooter() {
  return (
    <div>
      <footer className="footer">
        <div>
          <h3>Meeting Information</h3>
          <p className="schedule">
            Every Third Monday
            <br />
            January - May & September - November
            <br />
            6:30-7:00 p.m. Social Time <br />
            7:00-8:30 p.m. Business Meeting & Program
            <br />
            McKinney Fire Station 5, Community Room 6600 Virginia Parkway,
            McKinney, TX
          </p>
          <ul className="footer-list-2"></ul>
          <p>
            © 2024 First Nighter <br></br> African Violet Society of Dallas
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
      </footer>
    </div>
  );
}

export default App;
