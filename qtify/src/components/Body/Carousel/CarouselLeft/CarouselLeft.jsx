import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../../assets/left_arrow.svg";
import styles from "./carouselLeft.module.css";

const CarouselLeft = () => {
  const [isBeg, setIsBeg] = useState(true);
  const swiper = useSwiper();

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeg(swiper.isBeginning);
    });
  }, []);
  return (
    <div className={styles.leftNavigation}>
      {!isBeg && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeft;
