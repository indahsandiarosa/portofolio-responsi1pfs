import React from 'react';
import '../assets/styles/Tools.css';
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
import logonet from '../assets/styles/logonet.png';
import logosql from '../assets/styles/logosql.png';

function About() {
  return (
    <div id="tools" className="body7">
        <div class="container2">
   <div class="title">
    Skills
   </div>
   <div class="grid">
    <div class="grid-item">
    <img src={logohtml} alt="HTML Logo" />
    </div>
    <div class="grid-item">
    <img src={logocss} alt="CSS Logo" />
    </div>
    <div class="grid-item">
    <img src={logojs} alt="JavaScript Logo" />
    </div>
    <div class="grid-item">
    <img src={logofigma} alt="Figma Logo" />
    </div>
    <div class="grid-item">
    <img src={logocl} alt="Command Line Logo" />
    </div>
    <div class="grid-item">
    <img src={logovscode} alt="Visual Studio Code Logo" />
    </div>
    <div class="grid-item">
    <img src={logoboot} alt="Bootstrap Logo" />
    </div>
    <div class="grid-item">
    <img src={reactlogo} alt="React Logo" />
    </div>
    <div class="grid-item">
    <img src={logonet} alt="net Logo" />
    </div>
    <div class="grid-item">
    <img src={logosql} alt="logo sql" />
    </div>
   </div>
  </div>
    </div>
  );
}

export default About;
