import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./styles.module.scss";

const slideImages = [
  "images/slider/slider1.webp",
  "images/slider/slider2.webp",
];

export function Announcement() {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${slideImages[0]})` }}
          />
        </div>
        <div className="each-slide">
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${slideImages[1]})` }}
          />
        </div>
      </Slide>
    </div>
  );
}
