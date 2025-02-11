import React, { useState } from "react";
import Slider from "react-slick"; // Importing React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Heroimage from "../components/Heroimage/Heroimage";
import Projectcards from "../components/Projects/Projectcards";
import projectData from "../Staticdata/data";
import { Container } from "react-bootstrap";

function Projects() {
  const [projects] = useState(projectData);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 cards on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 card on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Heroimage heading="PROJECTS." text="Some of my most recent works" />
      <Container>
        <Slider {...settings}>
          {projects.map((project) => (
            <Projectcards key={project.id} project={project} />
          ))}
        </Slider>
      </Container>
    </div>
  );
}

export default Projects;
