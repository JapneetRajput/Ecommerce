// need to write dynamic logic and logic for img
// instead of <a> need to write logic to dynamic route to individual product page by passing id parameter
// need to develope components for card
import styles from "./css/product.module.css";
import Footer from "../components/Footer";

export const Product = () => {
  return (
    <div>
      <section className={styles.section_products}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="header">
                <h2>Products</h2>
                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            {/* <!-- Single Product --> */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id={styles.product_1} className={styles.single_product}>
                <a href="individualprod" className={styles.link}>
                  <div className={styles.part_1}></div>
                  <div className={styles.part_2}>
                    <h3 className={styles.product_title}>Here Product Title</h3>
                    <h4 className={styles.product_price}>$49.99</h4>
                  </div>
                </a>
              </div>
            </div>
            {/* <!-- Single Product --> */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id={styles.product_2} className={styles.single_product}>
                <a href="individualprod" className={styles.link}>
                  <div className={styles.part_1}></div>
                  <div className={styles.part_2}>
                    <h3 className={styles.product_title}>Here Product Title</h3>
                    <h4 className={styles.product_price}>$49.99</h4>
                  </div>
                </a>
              </div>
            </div>
            {/* <!-- Single Product --> */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id={styles.product_3} className={styles.single_product}>
                <a href="individualprod" className={styles.link}>
                  <div className={styles.part_1}></div>
                  <div className={styles.part_2}>
                    <h3 className={styles.product_title}>Here Product Title</h3>
                    <h4 className={styles.product_price}>$49.99</h4>
                  </div>
                </a>
              </div>
            </div>
            {/* <!-- Single Product --> */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id={styles.product_4} className={styles.single_product}>
                <a href="individualprod" className={styles.link}>
                  <div className={styles.part_1}></div>
                  <div className={styles.part_2}>
                    <h3 className={styles.product_title}>Here Product Title</h3>
                    <h4 className={styles.product_price}>$49.99</h4>
                  </div>
                </a>
              </div>
            </div>
            {/* <!-- Single Product --> */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id={styles.product_1} className={styles.single_product}>
                <a href="individualprod" className={styles.link}>
                  <div className={styles.part_1}></div>
                  <div className={styles.part_2}>
                    <h3 className={styles.product_title}>Here Product Title</h3>
                    <h4 className={styles.product_price}>$49.99</h4>
                  </div>
                </a>
              </div>
            </div>
            {/* <!-- Single Product --> */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id={styles.product_2} className={styles.single_product}>
                <a href="individualprod" className={styles.link}>
                  <div className={styles.part_1}></div>
                  <div className={styles.part_2}>
                    <h3 className={styles.product_title}>Here Product Title</h3>
                    <h4 className={styles.product_price}>$49.99</h4>
                  </div>
                </a>
              </div>
            </div>
            {/* <!-- Single Product --> */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id={styles.product_3} className={styles.single_product}>
                <a href="individualprod" className={styles.link}>
                  <div className={styles.part_1}></div>
                  <div className={styles.part_2}>
                    <h3 className={styles.product_title}>Here Product Title</h3>
                    <h4 className={styles.product_price}>$49.99</h4>
                  </div>
                </a>
              </div>
            </div>
            {/* <!-- Single Product --> */}
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div id={styles.product_4} className={styles.single_product}>
                <a href="individualprod" className={styles.link}>
                  <div className={styles.part_1}></div>
                  <div className={styles.part_2}>
                    <h3 className={styles.product_title}>Here Product Title</h3>
                    <h4 className={styles.product_price}>$49.99</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
