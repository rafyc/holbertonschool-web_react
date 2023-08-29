import logo from './img/logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <main>
          <p>Login to access the full dashboard</p>
        </main>
      </body>
      <footer className='App-footer'>
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
