import React from "react";
import styles from "./navbar.module.css";
import Button from "../Button/Button";
import Searchbar from "../Search/Searchbar";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar_wrapper}>
      <Link to="/">
        <Logo />
      </Link>
      <Searchbar />
      <Button>Give Feedback</Button>
    </nav>
  );
};

export default Navbar;
