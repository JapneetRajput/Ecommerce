import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/homecard.module.css";
export default function Homecard() {
  return (
    <div className="row pt-3">
      <div className="col-sm-3">
        <Link to={`/product/speakers`}>
          <div className={`${styles.card} card my-3  `}>
            <div className="card-body  text-center">
              <h3 className="card-title text-center py-5">Headset</h3>
              <a href="#" className="btn btn-primary  ">
                See now
              </a>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-sm-3">
        <Link to={`/product/speakers`}>
          <div className={`${styles.card} card my-3  `}>
            <div className="card-body  text-center">
              <h3 className="card-title text-center py-5">Speakers</h3>
              <a href="#" className="btn btn-primary  ">
                See now
              </a>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-sm-3">
        <Link to={`/product/smart-watches`}>
          <div className={`${styles.card} card my-3  `}>
            <div className="card-body  text-center">
              <h3 className="card-title text-center py-5">Smart Watches</h3>
              <a href="#" className="btn btn-primary  ">
                See now
              </a>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-sm-3">
        <Link to={`/product/wires`}>
          <div className={`${styles.card} card my-3  `}>
            <div className="card-body  text-center">
              <h3 className="card-title text-center py-5">Wires</h3>

              <a href="#" className="btn btn-primary  ">
                See now
              </a>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-sm-3">
        <Link to={`/product/comp-accessories`}>
          <div className={`${styles.card} card my-3  `}>
            <div className="card-body  text-center">
              <h3 className="card-title text-center py-5">
                Computer Accessories
              </h3>
              <span className="btn btn-primary  ">See now</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-sm-3">
        <Link to={`/product/power-bank`}>
          <div className={`${styles.card} card my-3  `}>
            <div className="card-body  text-center">
              <h3 className="card-title text-center py-5">Power Bank</h3>
              <span href="#" className="btn btn-primary  ">
                See now
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-sm-3">
        <Link to={`/product/usb-hubs`}>
          <div className={`${styles.card} card my-3  `}>
            <div className="card-body  text-center">
              <h3 className="card-title text-center py-5">USB Hubs</h3>
              <span href="#" className="btn btn-primary  ">
                See now
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-sm-3">
        <Link to={`/product/car-accessories`}>
          <div className={`${styles.card} card my-3  `}>
            <div className="card-body  text-center">
              <h3 className="card-title text-center py-5">Car Accessories</h3>

              <span className="btn btn-primary  ">See now</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
