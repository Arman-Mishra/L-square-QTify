import React, { useState, useEffect } from "react";
import styles from "./section.module.css";
import Card from "../Card/Card";
import axios from "axios";

const Section = ({ btn_text }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetchCards().then((data) => setArr(data));
  });

  const fetchCards = async () => {
    const url = "https://qtify-backend-labs.crio.do/albums/top";
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.top_bar}>
          <p className={styles.text_white}>Top Albums</p>
          <button className={styles.button_green}>{btn_text}</button>
        </div>
        <div className={styles.grid}>
          {arr.map((item) => {
            console.log(item);
            return (
              <Card
                key={item.id}
                data={{
                  image: item.image,
                  follows: item.follows,
                  title: item.title,
                  slug: item.slug,
                  songs: item.songs,
                }}
                type="album"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section;
