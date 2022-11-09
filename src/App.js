import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Product } from "./pages/Product";
import Admin from "./pages/Admin";
import AdminPanel from "./pages/AdminPanel";
import Cart from "./pages/Cart";
import { IndividualProd } from "./pages/IndividualProd";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const { pathname } = useLocation();

  // const [users,setUsers] = useState([]);
  // const collectionRef = collection(db, "Users");

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(collectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, []);

  const cartFormStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartFormStorage);

  const handleAddToCart = (product, quantity) => {
    const exists = cart.findIndex((cartItem) => {
      const { product: productInCart } = cartItem;
      return productInCart.id === product.id;
    });
    if (exists >= 0) return;

    setCart([...cart, { product, quantity }]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      {pathname !== "/admin" && pathname !== "/adminpanel" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route
          exact
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/adminpanel" element={<AdminPanel />} />
        <Route
          exact
          path="/individual-prod/:id"
          element={
            <IndividualProd cart={cart} handleAddToCart={handleAddToCart} />
          }
        />
        <Route exact path="/product/:categoryname" element={<CategoryPage />} />
      </Routes>
    </>
  );
}

export default App;
