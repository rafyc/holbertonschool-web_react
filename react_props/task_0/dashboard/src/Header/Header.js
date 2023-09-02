import React from 'react';
import './Header.css';
import logo from '../holberton-logo';

const Header = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </div>
    </div>
  )
}

export default Header;
