import React, { useState, useEffect } from "react";
import styles from "./css/product.module.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, onSnapshot, doc, query, where } from "firebase/firestore";

export default function CategoryPage() {
  let { categoryname } = useParams();
  const [products, setProducts] = useState([]);
  const collectionRef = collection(db, "Products");

  const q = query(collectionRef, where("productCategory", "==", categoryname));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {/* <span>{categoryname}</span> */}
      <section className={styles.section_products}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="header">
                <h2>{categoryname.toUpperCase()}</h2>
                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            {products.map((product) => {
              const userDoc = doc(db, "Products", product.id);
              return (
                <div className="col-md-6 col-lg-4 col-xl-3 text-center">
                  <div id={styles.product_1} className={styles.single_product}>
                    <Link to={`/individual-prod/${product.id}`}>
                      <a href="#" className={styles.link}>
                        <div className={styles.part_1}>
                          <img
                            className={styles.img}
                            src={product.productImage}
                          />
                        </div>
                        <div className={styles.part_2}>
                          <h3 className={styles.product_title}>
                            {product.productName}
                          </h3>
                          <h4 className={styles.product_price}>
                            ₹{product.productPrice}
                          </h4>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <!-- Single Product --> */}
          {/* <div className="col-md-6 col-lg-4 col-xl-3">
              <div id={styles.product_2} className={styles.single_product}>
                <a href="individual-prod" className={styles.link}>
                  <div className={styles.part_1}></div>
                  <div className={styles.part_2}>
                    <h3 className={styles.product_title}>Here Product Title</h3>
                    <h4 className={styles.product_price}>$49.99</h4>
                  </div>
                </a>
              </div>
            </div> */}
          {/* <!-- Single Product --> */}
          {/* <div className="col-md-6 col-lg-4 col-xl-3">
              <div id={styles.product_3} className={styles.single_product}>
                <a href="individual-prod" className={styles.link}>
                  <div className={styles.part_1}></div>
                  <div className={styles.part_2}>
                    <h3 className={styles.product_title}>Here Product Title</h3>
                    <h4 className={styles.product_price}>$49.99</h4>
                  </div>
                </a>
              </div>
            </div> */}
          {/* <!-- Single Product --> */}
          {/* <div className="col-md-6 col-lg-4 col-xl-3">
              <div id={styles.product_4} className={styles.single_product}>
                <a href="individual-prod" className={styles.link}>
                  <div className={styles.part_1}></div>
                  <div className={styles.part_2}>
                    <h3 className={styles.product_title}>Here Product Title</h3>
                    <h4 className={styles.product_price}>$49.99</h4>
                  </div>
                </a>
              </div>
            </div> */}
          {/* <!-- Single Product --> */}
          {/* <div className="col-md-6 col-lg-4 col-xl-3">
              <div id={styles.product_1} className={styles.single_product}>
                <a href="individual-prod" className={styles.link}>
                  <div className={styles.part_1}></div>
                  <div className={styles.part_2}>
                    <h3 className={styles.product_title}>Here Product Title</h3>
                    <h4 className={styles.product_price}>$49.99</h4>
                  </div>
                </a>
              </div>
            </div> */}
          {/* <!-- Single Product --> */}
          {/* <div className="col-md-6 col-lg-4 col-xl-3">
              <div id={styles.product_2} className={styles.single_product}>
                <a href="individual-prod" className={styles.link}>
                  <div className={styles.part_1}></div>
                  <div className={styles.part_2}>
                    <h3 className={styles.product_title}>Here Product Title</h3>
                    <h4 className={styles.product_price}>$49.99</h4>
                  </div>
                </a>
              </div>
            </div> */}
          {/* <!-- Single Product --> */}
          {/* <div className="col-md-6 col-lg-4 col-xl-3">
              <div id={styles.product_3} className={styles.single_product}>
                <a href="individual-prod" className={styles.link}>
                  <div className={styles.part_1}></div>
                  <div className={styles.part_2}>
                    <h3 className={styles.product_title}>Here Product Title</h3>
                    <h4 className={styles.product_price}>$49.99</h4>
                  </div>
                </a>
              </div>
            </div> */}
          {/* <!-- Single Product --> */}
          {/* <div className="col-md-6 col-lg-4 col-xl-3">
              <div id={styles.product_4} className={styles.single_product}>
                <a href="individual-prod" className={styles.link}>
                  <div className={styles.part_1}></div>
                  <div className={styles.part_2}>
                    <h3 className={styles.product_title}>Here Product Title</h3>
                    <h4 className={styles.product_price}>$49.99</h4>
                  </div>
                </a>
              </div>
            </div> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}
