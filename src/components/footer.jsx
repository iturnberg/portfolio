import '@fortawesome/fontawesome-free/css/all.min.css';

import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a href="https://www.linkedin.com/in/ianturnberg/" target="_blank" rel="noopener noreferrer" className="icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/iturnberg" target="_blank" rel="noopener noreferrer" className="icon icon-github">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
}
