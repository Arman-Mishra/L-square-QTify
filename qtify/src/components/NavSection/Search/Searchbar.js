import React from "react";
import styles from "./searchbar.module.css";
import { ReactComponent as SearchIcon } from "../../../assets/Search_icon.svg";

export default function Searchbar() {
  const handler = (e) => {
    e.preventDefault();
    console.log("Clicked");
  };

  return (
    <form className={styles.SearchbarWrapper} onSubmit={handler}>
      <input
        className={styles.Searchbar}
        type="text"
        name="searchbar"
        id="searchbar"
        placeholder="Search an album of your choice"
        required
      />
      <button className={styles.input_button}>
        <SearchIcon className={styles.input_logo} />
      </button>
    </form>
  );
}
