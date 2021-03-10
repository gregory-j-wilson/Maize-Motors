import logo from './logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} id="logo" alt="Maize Motors Logo"></img>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our Cars</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
