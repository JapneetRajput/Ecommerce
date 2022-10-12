import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Product } from "./pages/Product";
import Admin from "./pages/Admin";
import AdminPanel from "./pages/AdminPanel";
import Cart from "./pages/Cart";
import { IndividualProd } from "./pages/IndividualProd";

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

  return (
    <>
      {pathname !== "/admin" && pathname !== "/adminpanel" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/admin" element={<Admin />}/>
        <Route exact path="/adminpanel" element={<AdminPanel />} />
        <Route exact path="/individual-prod/:id" element={<IndividualProd />} />
      </Routes>
    </>
  );
}

export default App;