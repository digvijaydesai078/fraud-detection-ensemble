import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageCarousels = () => {
  return (
    <Carousel fade>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Carousel.Item key={`carousel${idx + 1}`}>
          <img
            className="d-block w-100 Carousel"
            src={process.env.PUBLIC_URL + `/images/download${idx + 1}.jpeg`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousels;
