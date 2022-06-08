import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./Slider.module.css";
import img1 from "../../assets/foto3.webp";
import img2 from "../../assets/foto2.webp";
import img3 from "../../assets/foto1.webp";

const sliders = () => {};

const TestCarousel = () => {
  return (
    <Carousel
      className={styles.carousel}
      autoPlay={true}
      showStatus={false}
      showThumbs={false}
      useKeyboardArrows={true}
      infiniteLoop={true}
    >
      <div className={styles.imgCarousel}>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} height="340px" />
      </div>
      <div>
        <img src={img3} height="340px" />
      </div>
    </Carousel>
  );
};

export default TestCarousel;
