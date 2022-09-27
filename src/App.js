import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Product } from "./pages/Product";
import Admin from "./pages/Admin";
import AdminPanel from "./pages/AdminPanel";
import Cart from "./pages/Cart";


function App() {
  const {pathname} = useLocation();
  return (
    <>
    {(pathname !== '/admin' && pathname !== "/adminpanel") && <Navbar/>}
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route  exact path="/cart" element={<Cart />} />
        <Route  exact path="/admin" element={<Admin />} />
        <Route  exact path="/adminpanel" element={<AdminPanel />} />
      </Routes>
    </>
  );
}

export default App;
