import React from 'react';
import '../assets/styles/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function About() {
  return (
    <div id="about" className="body9">
        <div className="about-container">
          <h1>Hi, I'm Indah Sandiarosa</h1>
          <p>With a strong foundation in Information Technology and a passion for crafting impactful designs, I strive to bridge the gap between functionality and aesthetics. My expertise spans various creative and technical domains, reflecting my commitment to delivering excellence. I embrace challenges and see every project as an opportunity to grow and contribute value. With a strong foundation in Information Technology and a passion for crafting impactful designs, I strive to bridge the gap between functionality and aesthetics. My expertise spans various creative and technical domains, reflecting my commitment to delivering excellence. I embrace challenges and see every project as an opportunity to grow and contribute value.</p>
          
          <div className="details">
            <div className="detail-item">
                <i className="bi bi-bar-chart-line-fill"></i>
                <h3>Deeper Skillset</h3>
                <p>With experience in front-end development and UI/UX design, I specialize in creating user-centric digital experiences.</p>
            </div>
            <div className="detail-item">
                <i className="bi bi-person-workspace"></i>
                <h3>Creative Work</h3>
                <p>I’ve had the privilege of contributing to meaningful projects, including:</p>
            </div>
            <div className="detail-item">
                <i className="bi bi-person-arms-up"></i>
                <h3>Strong Dedication</h3>
                <p>What sets me apart is my unwavering dedication to self-improvement and collaboration.</p>
            </div>
          </div>

          {/* Tombol Download CV */}
          <div className="text-center mt-4">
          <a href="/cv.pdf" download>
  <button className="btn btn-success">Download CV</button>
</a>
          </div>
        </div>
    </div>
  );
}

export default About;
