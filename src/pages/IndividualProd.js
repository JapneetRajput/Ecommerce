import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";

import {
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";


export const IndividualProd = ({cart,handleAddToCart}) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  
  let { id } = useParams();

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  }


  useEffect(() => {
  const read = async()=> {
    const docRef = doc(db, "Products", id)
    const docSnap = await getDoc(docRef)
  
    const data = docSnap.exists() ? docSnap.data() : null
  
    if (data === null || data === undefined) return null
  
    setProduct({...data,id} );
  };

  read();
  }, []);
  // const split=product.productDesc.split(".")
  // console.log(split)
    // const snapshot = product.data;
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={product.productImage}
              alt="..."
            />
          </div>
          <div className="col-md-6">
            {/* <div className="small mb-1">SKU: BST-498</div>  */}
            <h1 className="display-5 fw-bolder">{product.productName}</h1>
            <div className="fs-5 mb-5">
              <span>₹{product.productPrice}</span> 
            </div>
            <h5>Product Description</h5>
            <ul><p className="lead">
              {product.productDesc && product.productDesc.split(".").map((item)=>(
                <li>{item}</li>
              ))}
            </p>
            </ul>
            <div className="d-flex">
              <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="number"
                value={quantity}
                onChange={(e) => handleQuantity(e)}
                style={{maxWidth:"4.5rem"}}
                min="1"
                // onKeyPress={e => e.key !== "-" ? "" : e.key}
              />
              <Link to={`/cart`}
                className="btn btn-outline-dark flex-shrink-0"
                type="button" onClick={() => handleAddToCart(product,quantity)}
              >
                <i className="bi-cart-fill me-1"></i>
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

