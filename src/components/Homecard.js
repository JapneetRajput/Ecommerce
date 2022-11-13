import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./css/homecard.module.css";
import { db } from "../firebase";
import { collection, onSnapshot, doc } from "firebase/firestore";

export default function Homecard() {
  const [categories, setCategories] = useState([]);
  const collectionRef = collection(db, "Categories");
  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      setCategories(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="row pt-3">
      {categories.map((category) => {
        const userDoc = doc(db, "Categories", category.id);
        return (
          <div className="col-sm-3">
            <Link to={`/product/${category.Name}`} className={styles.card}>
              <div className={`${styles.card} card my-3  `}>
                <div className="card-body  text-center">
                  <h3 className="card-title text-center py-5">
                    {category.Name}
                  </h3>
                  <a href="#" className={`btn ${styles.btn_color} `}>
                    See now
                  </a>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
