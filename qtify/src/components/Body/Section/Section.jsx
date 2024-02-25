import React, { useState, useEffect } from "react";
import styles from "./section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import TabPanel from "../Tab/TabPanel";

const Section = ({ title, data, type, filters }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [genre, setGenre] = useState("All");
  const [songData, setSongData] = useState([]);

  useEffect(() => {
    type === "song" && setSongData(data);
  }, [data]);

  useEffect(() => {
    type === "song" && setSongData(filterSongGenre(genre, data));
  }, [genre]);

  //helper
  const filterSongGenre = (textValue, data) => {
    if (textValue === "All") return data;
    return data.filter((item) => item.genre.label === textValue);
  };

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
              <>
                {type === "song" && (
                  <TabPanel data={filters} changeGenre={setGenre} />
                )}
                <Carousel
                  data={type === "song" ? songData : data}
                  renderComponent={(renderData) => (
                    <Card data={renderData} type={type} />
                  )}
                />
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Section;
