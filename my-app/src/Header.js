import React from "react";
import "./App.css";

function Header() {
  return (
    <header id="header" className="header-section">
      <div className="header-box container">
        <nav>
          <ul id="sidemenu">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
        <div className="header-text">
          <p>Software Developer</p>
          <h1>
            Hi, I'm <span>Kunal Pawar</span><br />
            From Pune
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
