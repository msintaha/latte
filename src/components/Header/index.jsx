import React from 'react';
import logo from '../../assets/images/latte.png';

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img alt="Latte" height="22" src={logo} />
            </a>
            <p className="navbar-text">Latte</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
