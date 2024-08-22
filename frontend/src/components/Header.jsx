import React from 'react';
import '../styles/Header.css';
import cunyStudentsImg from '../images/CUNYLogo.png';

function Header() {
  return (
    <header className="Header">
      <a href="/"><img src={cunyStudentsImg} className="nav-logo"></img></a>
      
      <nav>
        <ul className="nav-list">
          {/*<li><a href="/">Home</a></li>        home button not relevent for prelogin page*/}
          <li><a href="/resources">Resources</a></li>
          <li><a href="/login" className='login'>Log in</a></li>
          <li><a href="/register" className='register'>Register</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
