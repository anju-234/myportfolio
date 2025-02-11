import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="get_in_touch">
          <h4>Get in Touch</h4>
          <p>
            Want to collaborate or have any questions? Feel free to reach out!
          </p>
          <Link to="/contact" className="btn">
            Contact Me
          </Link>
        </section>

        <div className="footer_copyright">
          <p>© {new Date().getFullYear()} Anju. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
