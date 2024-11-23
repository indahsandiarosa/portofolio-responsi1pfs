import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Mengimpor SweetAlert2
import '../assets/styles/Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi inputan (misalnya tidak boleh kosong)
    if (!name || !email || !message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are required!',
      });
      return;
    }

    // Menampilkan SweetAlert2 jika data berhasil disubmit
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your message has been submitted.',
    });

    // Reset form setelah submit
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id="contact" className="contact-container">
      <div className="left-section">
        <h2>Let's discuss</h2>
        <h1> on something <span>cool</span> together</h1>
      </div>
      <div className="right-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
