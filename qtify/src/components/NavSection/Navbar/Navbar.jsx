import React from "react";
import styles from "./navbar.module.css";
import Button from "../Button/Button";
import Searchbar from "../Search/Searchbar";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <nav className={styles.navbar_wrapper}>
      <a href="/">
        <Logo />
      </a>
      <Searchbar />
      <Button>Give Feedback</Button>
    </nav>
  );
};

export default Navbar;
