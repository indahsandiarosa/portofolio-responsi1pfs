import React from 'react';
import '../assets/styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import smallbox from '../assets/styles/smallbox.png';

function Footer() {
    return (
        <footer>
            <div className="footer">
                <img src={smallbox} alt="smallbox" />
                <p>
                    Email: <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">rozasandiya@gmail.com</a> Handphone <a href="#">085157742281</a>
                </p>
                <div className="social-icons">
                    <a href="https://www.threads.net/@sn.diarsa" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-threads"></i>
                    </a>
                    <a href="https://github.com/indahsandiarosa" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/roza.sandiya/profilecard/?igsh=MWkwem42MXQwajY3dw==" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
