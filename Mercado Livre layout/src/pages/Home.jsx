import TopMenu from "../components/header/TopMenu.component";
import Carousel from "../components/slider/Slider";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <TopMenu></TopMenu>
      <Carousel></Carousel>
    </div>
  );
};

export default Home;
