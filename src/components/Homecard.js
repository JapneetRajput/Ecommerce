import React from "react";
import styles from "./css/homecard.module.css";
export default function Homecard() {
  return (
    <div className="row pt-3">
      <div className="col-sm-3">
        <div className={`${styles.card} card my-3  `}>
          <div className="card-body  text-center">
            <h3 className="card-title text-center py-5">Headset</h3>
            <a href="#" className="btn btn-primary  ">
              See now
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className={`${styles.card} card my-3  `}>
          <div className="card-body  text-center">
            <h3 className="card-title text-center py-5">Speakers</h3>
            <a href="#" className="btn btn-primary  ">
              See now
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className={`${styles.card} card my-3  `}>
          <div className="card-body  text-center">
            <h3 className="card-title text-center py-5">Smart Watches</h3>
            <a href="#" className="btn btn-primary  ">
              See now
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className={`${styles.card} card my-3  `}>
          <div className="card-body  text-center">
            <h3 className="card-title text-center py-5">Wires</h3>
            <a href="#" className="btn btn-primary  ">
              See now
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className={`${styles.card} card my-3  `}>
          <div className="card-body  text-center">
            <h3 className="card-title text-center py-5">
              Computer Accessories
            </h3>
            <a href="#" className="btn btn-primary  ">
              See now
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className={`${styles.card} card my-3  `}>
          <div className="card-body  text-center">
            <h3 className="card-title text-center py-5">Power Bank</h3>
            <a href="#" className="btn btn-primary  ">
              See now
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className={`${styles.card} card my-3  `}>
          <div className="card-body  text-center">
            <h3 className="card-title text-center py-5">USB Hubs</h3>
            <a href="#" className="btn btn-primary  ">
              See now
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div className={`${styles.card} card my-3  `}>
          <div className="card-body  text-center">
            <h3 className="card-title text-center py-5">Car Accessories</h3>
            <a href="#" className="btn btn-primary  ">
              See now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
