import React, { useState } from "react";
import "./Projectcard.css";
import { Card, Button } from "react-bootstrap";

function ProjectCard({ project }) {
  const { id, name, desc, img, github_link, vercel_link } = project;
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <Card className="project-card" key={id}>
      <Card.Img variant="top" src={img} className="project-img" />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text className="card-text">
          {showFullDesc ? desc : `${desc.slice(0, 50)}...`}
          <span
            className="toggle-text"
            onClick={() => setShowFullDesc(!showFullDesc)}
            style={{ color: "yellow", cursor: "pointer", marginLeft: "5px" }}
          >
            {showFullDesc ? " Show Less" : " Read More"}
          </span>
        </Card.Text>
        <div className="Visit">
          <Button href={vercel_link}>Visit</Button>
          <Button href={github_link}>Source</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
