import React, { useState } from "react";
import styles from "./section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, data, type, filters }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.top_bar}>
          <p className={styles.text_white}>{title}</p>
          {type === "album" ? (
            <button
              className={styles.button_green}
              onClick={() => {
                setCarouselToggle((prevState) => !prevState);
              }}
            >
              {carouselToggle ? "Show All" : "Collapse"}
            </button>
          ) : (
            <></>
          )}
        </div>
        {data.length === 0 ? (
          <CircularProgress />
        ) : (
          <div className={styles.cardWrapper}>
            {!carouselToggle ? (
              <div className={styles.grid}>
                {data.map((item) => {
                  return <Card key={item.id} data={item} type={type} />;
                })}
              </div>
            ) : (
              <Carousel
                data={data}
                renderComponent={(renderData) => (
                  <Card data={renderData} type={type} />
                )}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Section;
