import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center mb-2">
              <Link to="https://facebook.com" target="_blank" className="text-white me-3">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Link>
              <Link to="https://twitter.com" target="_blank" className="text-white me-3">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
              <Link to="https://linkedin.com/in/yash-gajanan-pal" target="_blank" className="text-white me-3">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Link>
              <Link to="https://github.com/Yashya14" target="_blank" className="text-white me-3">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Link>
              <Link to="mailto:info@example.com" target="_blank" className="text-white">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </Link>
            </div>
            <p className="mb-1">© 2025 Employee Management System. All Rights Reserved.</p>
            <p className="mb-0">
              Created by Yash <FontAwesomeIcon icon={faHeart} className="text-danger" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;