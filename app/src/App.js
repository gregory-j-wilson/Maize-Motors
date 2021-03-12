import logo from './logo.png'
import './App.css';
import {Link, Route} from 'react-router-dom'
import About from './Components/About'
import OurCars from './Components/OurCars'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} id="logo" alt="Maize Motors Logo"></img>
        <nav>
          <ul>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/about" className="link">About</Link></li>
            <li><Link to="/cars" className="link">Our Cars</Link></li>
            <li><Link to="/contact" className="link">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <Route exact path="/"></Route>
      
      <Route path="/about">
        <About />
      </Route>

      <Route path="/cars">
        <OurCars />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

    </div>
  );
}

export default App;
