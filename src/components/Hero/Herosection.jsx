import React from "react";
import "./Herosection.css";
import heroimg from "../../assets/heroimage.jpg";
import { Link } from "react-router-dom";

function Herosection() {
  return (
    <div className="hero">
      <div className="img-sec">
        <img src={heroimg} className="intro-img" alt="heroimg" />
      </div>
      <div className="content">
        <p>HI,I'M ANJU.M</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
