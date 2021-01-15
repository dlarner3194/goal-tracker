import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* TODO: make this a component? */}
        <form>
          <label for="fname">Enter a goal:</label>
          <input type="text" id="fname" name="fname" /><br></br>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
