import React, { FC } from "react";
import logo from "../../../images/logo.png";
import styles from "./app-header.module.css";

export const AppHeaderUi: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div className={styles.navContainer}>
          <nav className={styles.navigation}>
            <ul className={styles.navItem}>Home</ul>
            <ul className={styles.navItem}>About</ul>
            <ul className={styles.navItem}>Conctact Us</ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
