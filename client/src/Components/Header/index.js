import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/login" className={styles.navLink}>
          Login
        </Link>
        <Link to="/register" className={styles.navLink}>
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
