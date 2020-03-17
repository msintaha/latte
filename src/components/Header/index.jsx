import React from 'react';
import logo from '../../assets/images/latte.png';

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} height="22" />
        <a className="navbar-brand" href="/">Latte</a>
      </nav>
      <br />
    </div>
  );
}

export default Header;
