import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <a
            href="https://github.com/anju-234/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "30px" }}
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="/resume.pdf" // Replace with the actual path to your resume
            download
            className="btn"
            style={{
              padding: "8px 16px",
              color: "#fff",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
          >
            Download Resume
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default Header;
