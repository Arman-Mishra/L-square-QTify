import React from "react";
import styles from "./card.module.css";
import { Tooltip, Chip } from "@mui/material";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, slug, songs } = data;
        return (
          <div style={{ display: "inline-block", width: "fit-content" }}>
            <Tooltip title={`${songs.length} songs`} placement="top" arrow>
              <a href={`/album/${slug}`} style={{ textDecoration: "none" }}>
                <div className={styles.wrapper}>
                  <div className={styles.card}>
                    <img src={image} alt="album" loading="lazy" />
                    <div className={styles.banner}>
                      <Chip
                        label={`${follows} follows`}
                        size="small"
                        className={styles.chip}
                      />
                    </div>
                  </div>
                  <div className={styles.titleWrapper}>
                    <p>{title}</p>
                  </div>
                </div>
              </a>
            </Tooltip>
          </div>
        );
      }

      case "song": {
        const { image, likes, title } = data;
        return (
          <div style={{ display: "inline-block", width: "fit-content" }}>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="song" loading="lazy" />
                <div className={styles.banner}>
                  <div className={styles.pill}>
                    <p>{likes} Likes</p>
                  </div>
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </div>
        );
      }

      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;
