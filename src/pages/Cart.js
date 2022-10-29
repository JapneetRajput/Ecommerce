import React from "react";
import styles from "./css/cart.module.css";

export default function Cart({cart,setCart}) {
  const calculateTotal = () => {
   return cart.reduce((prev,cartItem) => {
      const {product,quantity} = cartItem;
      return prev + product.productPrice * quantity;
    },0)
  }

  const handleRemove = (id) => {
    const newCart = cart.filter((cartItem) => {
      const {product} = cartItem;
      return product.id !== id;
    });
    setCart(newCart);
  }
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
                  {cart.length !== 0 ? cart.map((cartItem) => {
                    const {product,quantity} = cartItem;
                    return <div className={styles.product}>
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          className="img-fluid mx-auto d-block image"
                          src={product.productImage}
                        />
                      </div>
                      <div className="col-md-7 ">
                        <div className={styles.info}>
                          <div className="row">
                            <div className={`col-md-4 ${styles.product_name} `}>
                              <div className={styles.product_name}>
                                <h2 className="mb-0">{product.productName}</h2> 
                                <div
                                  className={`${styles.info} ${styles.product} `}
                                >
                                  <button type="button" class="btn btn-danger" onClick={() => handleRemove(product.id)}>Remove</button>
                                </div>
                              </div>
                            </div>
                            <div className={`col-md-5 ${styles.quantity} `}>
                              <label for="quantity" className="pt-3 h4" >Quantity : <br /><br />  {quantity}</label>
                              {/* <input
                                id="quantity"
                                type="number"
                                value={quantity}
                                min="1"
                                onChange={(e)=> console.log(e.target.value)}
                                className={`form-control ${styles.quantity_input} `}
                              /> */} 
                            </div>
                            <div className={`col-md-3 ${styles.price} `}>
                              <span>₹ {product.productPrice * quantity}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  }) : <div className="text-center pt-5">
                    <h1>No Products Added</h1>
                  </div> }
                  
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className={styles.summary}>
                  <h3>Summary</h3>
                  {/* <div className={styles.summary_item}>
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
                  </div> */}
                  <div className={styles.summary_item}>
                    <span className={styles.text}>Total</span>
                    <span className={styles.price}>{calculateTotal()}</span>
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
