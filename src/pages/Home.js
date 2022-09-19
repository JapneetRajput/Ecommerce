import styles from "./css/home.module.css";
import BSCarousel from "../components/BSCarousel";

export const Home = () => {
  return (
    <div>
      <BSCarousel />
      <div className={`${styles.container} px-5`}></div>
    </div>
  );
};
