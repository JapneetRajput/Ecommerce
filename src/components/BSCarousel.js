import React from "react";
import fourth from "../images/fourth.png";
import { Carousel } from "react-bootstrap";
export default function BSCarousel() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Carousel interval="3000">
              <Carousel.Item>
                <img className=" w-100" src={fourth} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className=" w-100" src={fourth} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className=" w-100" src={fourth} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
