import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="Header">
      <h1 className="title">Hackathon App</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/login">Log in</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
