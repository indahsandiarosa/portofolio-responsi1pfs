import React from 'react';
import './assets/styles/Header.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
