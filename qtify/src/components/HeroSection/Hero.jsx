import React from "react";
import styles from "./hero.module.css";
import { ReactComponent as HeroImg } from "../../assets/Qtify_heroimg.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_wrapper}>
        <div>
          <h1 className={styles.text}>100 Thousand Songs, ad-free</h1>
          <h1 className={styles.text}>Over thousands podcast episodes</h1>
        </div>
        <HeroImg />
      </div>
    </div>
  );
};

export default Hero;
