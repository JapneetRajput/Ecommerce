import styles from "./css/home.module.css";
import BSCarousel from "../components/BSCarousel";
import Homecard from "../components/Homecard";
import Footer from "../components/Footer";
import Admin from "./Admin";
import AdminPanel from "./AdminPanel";
import AddProductForm from "../components/AddProductForm";

export const Home = () => {
  return (
    <div>
      <BSCarousel />
      <div className={`${styles.container} px-5 pt-5  `}>
        <h1 className="text-center">Shop by Category</h1>
        <Homecard />
      </div>
      <Footer />
      <Admin />
      <AdminPanel />
    </div>
  );
};
