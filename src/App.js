import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Product } from "./pages/Product";
import { Login } from "./pages/Login";
import { IndividualProd } from "./pages/IndividualProd";
import Cart from "./pages/Cart";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/individualprod" element={<IndividualProd />} />
      </Routes>
    </>
  );
}

export default App;
