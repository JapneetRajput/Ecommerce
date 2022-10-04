import styles from "./css/home.module.css";
import BSCarousel from "../components/BSCarousel";
import Homecard from "../components/Homecard";
import Footer from "../components/Footer";
import AdminPanel from "./AdminPanel";
import Admin from "./Admin";

export const Home = () => {
  return (
    <div>
      <BSCarousel />
      <div className={`${styles.container} px-5 pt-5  `}>
        <h1 className="text-center">Shop by Category</h1>
        <Homecard />
        <Admin />
        <AdminPanel />
      </div>
      <Footer />
    </div>
  );
};
