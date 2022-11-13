import React from "react";
import img_first from "../images/img_first.png";
import img_third from "../images/img_third.png";
import img_second from "../images/img_second.png";
import { Carousel } from "react-bootstrap";
export default function BSCarousel() {
  return (
    <div>
      <Carousel interval="3000">
        <Carousel.Item>
          <img className=" w-100" src={img_first} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-100" src={img_second} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-100" src={img_third} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
