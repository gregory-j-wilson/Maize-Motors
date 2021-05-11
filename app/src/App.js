import logo from './logo.jpg'
import phone from './phone.jpg'
import location from './location.jpg'
import car from './car-red.jpg'

import './App.css';
import {Link, Route} from 'react-router-dom'
import About from './Components/About'
import OurCars from './Components/OurCars'
import Contact from './Components/Contact'
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
      <header className="header">
        <img style={{paddingBottom: 50 + 'px'}} src={logo} id="logo" alt="Maize Motors Logo"></img>
        <div class="location-phone"><img width="70" src={location} alt="location-icon"></img>5203 N Maize Rd, Maize, KS 67101</div>
        <div class="location-phone"><img width="50" src={phone} alt="phone-icon"></img><a href="tel:3163644196"><strong>(316) 364-4196</strong></a></div>
        <img src={car} alt="red car" width="300"></img>
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

      <Route path="/admin">
        <Login />
      </Route>

    </div>
  );
}

export default App;
