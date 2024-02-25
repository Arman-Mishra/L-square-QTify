import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from "../../../../assets/right_arrow.svg";
import styles from "./carouselRight.module.css";

const CarouselRight = () => {
  const [isEnd, setIsEnd] = useState(false);
  const swiper = useSwiper();

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  });

  return (
    <div className={styles.RightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRight;
