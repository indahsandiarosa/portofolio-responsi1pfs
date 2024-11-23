import React from 'react';
import '../assets/styles/Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import image1 from '../assets/styles/itemlist1.png';
import image2 from '../assets/styles/itemlist2.png';
import image3 from '../assets/styles/itemlist3.png';
import image4 from '../assets/styles/itemlist4.png';
import image5 from '../assets/styles/itemlist5.png';
import image6 from '../assets/styles/itemlist6.jpeg';

function Projects() {
  const listItems = [
    { id: 1, title: 'Web Design for MSMEs', content: 'This project creates a modern website for MSMEs. It aims to enhance their online presence and customer engagement.', imageUrl: image1 },
    { id: 2, title: 'E-Commerce Admin Dashboard', content: 'An admin dashboard for managing e-commerce operations. It streamlines inventory and order management.', imageUrl: image2 },
    { id: 3, title: 'Mobile App Design for MSMEs', content: 'This project designs a user-friendly mobile app for MSMEs. It helps improve service delivery.', imageUrl: image3 },
    { id: 4, title: 'To-Do List CRUD Application', content: 'A simple CRUD application for task management. Users can easily add, update, and delete tasks for your journey.', imageUrl: image4 },
    { id: 5, title: 'E-Commerce Admin Page', content: 'This project features an admin page for e-commerce sites. It simplifies product and order management, with chart and card.', imageUrl: image5 },
    { id: 6, title: 'GUI CRUD Interface for Hospitals', content: 'A GUI for managing patient data in hospitals. It enhances operational efficiency in healthcare.', imageUrl: image6 },
  ];

  // URL GitHub yang sama untuk semua tombol
  const githubLink = 'https://github.com/indahsandiarosa';

  return (
    <div id="projects" className="container my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div 
        className="listbox-wrapper"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap: '10px',
          paddingBottom: '10px'
        }}
      >
        {listItems.map((item) => (
          <div 
            key={item.id} 
            className="list-item"
            style={{
              flexShrink: 0,
              width: '300px',
              marginRight: '10px',
            }}
          >
            <div className="card mb-3">
              <img 
                src={item.imageUrl} 
                className="card-img-top" 
                alt={item.title} 
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.content}</p>
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  <i className="bi bi-github"></i> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
