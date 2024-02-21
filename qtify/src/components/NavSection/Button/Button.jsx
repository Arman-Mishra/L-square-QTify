import React from "react";
import styles from "./button.module.css";

export default function ButtonFeedback({ children }) {
  return <button className={styles.Button}>{children}</button>;
}
