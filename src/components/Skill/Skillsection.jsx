import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Card } from "react-bootstrap";

function Skillsection({ skill }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="mt-4">
      <Slider {...settings}>
        {skill.map((item, index) => (
          <div key={index}>
            <Card className="p-3 text-center shadow-sm mx-2 skill-card  ">
              <div
                className="d-flex align-items-center justify-content-center  "
                style={{ height: "80px" }}
              >
                {React.createElement(item.icon, {
                  size: 70,
                  color: item.color,
                })}
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default Skillsection;
