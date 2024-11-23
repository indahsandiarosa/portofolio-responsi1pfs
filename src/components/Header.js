import React from 'react';
import '../assets/styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import logohtml from '../assets/styles/logohtml.png';
import logocss from '../assets/styles/logocss.png';
import logojs from '../assets/styles/logojs.png';
import logofigma from '../assets/styles/logofigma.png';
import logocl from '../assets/styles/logocl.png';
import logovscode from '../assets/styles/logovscode.png';
import logoboot from '../assets/styles/logoboot.png';
import reactlogo from '../assets/styles/reactlogo.png';



function Header() {
  return (
    <>
      <body>
        <div href="#header" className="header-container">
          {/* Header Section */}
          <div className="header-box1">
            <div className="small-box"></div>
            <div className="nav-links">
          <a href="#header">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#tools">Tools</a>
          <a href="#contact">Contact</a>
        </div>
            <a href="#contact" className="hire-me">
              <i className="bi bi-briefcase-fill"></i>
              <strong>Hire me</strong>
            </a>
          </div>

          {/* Introduction Section */}
          <div className="box2">
            <div className="element-box2">
              <h2>
                Hello <span role="img" aria-label="waving hand">👋</span>,
              </h2>
              <h1>I'm a web</h1>
              <h3>Developer</h3>
              <p>I build things for web</p>

            </div>
          </div>

          {/* Additional Sections */}
          <div className="box3"></div>

          {/* Experience and Projects Section */}
          <div className="box4">
  

          
        
          </div>
        </div>
      </body>
    </>
  );
}

export default Header;
