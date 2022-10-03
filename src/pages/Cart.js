import React from "react";
import styles from "./css/cart.module.css";

export default function Cart() {
  return (
    <main className="page">
      <section className={`${styles.shopping_cart} ${styles.dark} `}>
        <div className="container">
          <div className={styles.block_heading}>
            <h2>Shopping Cart</h2>
          </div>
          <div className={styles.content}>
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className={styles.items}>
                  <div className={styles.product}>
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          className="img-fluid mx-auto d-block image"
                          src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className={styles.info}>
                          <div className="row">
                            <div className={`col-md-5 ${styles.product_name} `}>
                              <div className={styles.product_name}>
                                <a href="#">Lorem Ipsum dolor</a>
                                <div
                                  className={`${styles.info} ${styles.product} `}
                                >
                                  <div>
                                    Display:{" "}
                                    <span className={styles.value}>5 inch</span>
                                  </div>
                                  <div>
                                    RAM:{" "}
                                    <span className={styles.value}>4GB</span>
                                  </div>
                                  <div>
                                    Memory:{" "}
                                    <span className={styles.value}>32GB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`col-md-4 ${styles.quantity} `}>
                              <label for="quantity">Quantity:</label>
                              <input
                                id="quantity"
                                type="number"
                                value="1"
                                className={`form-control ${styles.quantity_input} `}
                              />
                            </div>
                            <div className={`col-md-3 ${styles.price} `}>
                              <span>$120</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.product}>
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          className="img-fluid mx-auto d-block image"
                          src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className={styles.info}>
                          <div className="row">
                            <div className={`col-md-5 ${styles.product_name} `}>
                              <div className={styles.product_name}>
                                <a href="#">Lorem Ipsum dolor</a>
                                <div
                                  className={`${styles.info} ${styles.product} `}
                                >
                                  <div>
                                    Display:{" "}
                                    <span className={styles.value}>5 inch</span>
                                  </div>
                                  <div>
                                    RAM:{" "}
                                    <span className={styles.value}>4GB</span>
                                  </div>
                                  <div>
                                    Memory:{" "}
                                    <span className={styles.value}>32GB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`col-md-4 ${styles.quantity} `}>
                              <label for="quantity">Quantity:</label>
                              <input
                                id="quantity"
                                type="number"
                                value="1"
                                className={`form-control ${styles.quantity_input} `}
                              />
                            </div>
                            <div className={`col-md-3 ${styles.price} `}>
                              <span>$120</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.product}>
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          className="img-fluid mx-auto d-block image"
                          src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className={styles.info}>
                          <div className="row">
                            <div className={`col-md-5 ${styles.product_name} `}>
                              <div className={styles.product_name}>
                                <a href="#">Lorem Ipsum dolor</a>
                                <div
                                  className={`${styles.info} ${styles.product} `}
                                >
                                  <div>
                                    Display:{" "}
                                    <span className={styles.value}>5 inch</span>
                                  </div>
                                  <div>
                                    RAM:{" "}
                                    <span className={styles.value}>4GB</span>
                                  </div>
                                  <div>
                                    Memory:{" "}
                                    <span className={styles.value}>32GB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={`col-md-4 ${styles.quantity} `}>
                              <label for="quantity">Quantity:</label>
                              <input
                                id="quantity"
                                type="number"
                                value="1"
                                className={`form-control ${styles.quantity_input} `}
                              />
                            </div>
                            <div className={`col-md-3 ${styles.price} `}>
                              <span>$120</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className={styles.summary}>
                  <h3>Summary</h3>
                  <div className={styles.summary_item}>
                    <span className={styles.text}>Subtotal</span>
                    <span className={styles.price}>$360</span>
                  </div>
                  <div className={styles.summary_item}>
                    <span className={styles.text}>Discount</span>
                    <span className={styles.price}>$0</span>
                  </div>
                  <div className={styles.summary_item}>
                    <span className={styles.text}>Shipping</span>
                    <span className={styles.price}>$0</span>
                  </div>
                  <div className={styles.summary_item}>
                    <span className={styles.text}>Total</span>
                    <span className={styles.price}>$360</span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
