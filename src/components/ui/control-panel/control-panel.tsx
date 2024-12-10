import React, { FC, useState } from "react";
import styles from "./control-panel.module.css";
import Like from "../../../images/Like.png";
import add from "../../../images/add.png";
import LikeActive from "../../../images/LikeActive.png"
import { TControlPanelUi } from "./type";
import { Link } from "react-router-dom";

export const ControlPanelUi: FC<TControlPanelUi> = ({setIsLiked, isLiked}) => {
  return (
    <section className={styles.controlContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>select action</h2>
      </div>
      <div className={styles.actionContainer}>
        <div className={styles.liked}>
          <button className={styles.button} onClick={setIsLiked}>
            <img
              src={isLiked ? LikeActive : Like}
              className={`${styles.like} ${
                isLiked ? styles.likeActive : styles.like
              }`}
            ></img>
            <p className={styles.text}>liked product</p>
          </button>
        </div>
        <div className={styles.addProdContainer}>
          <Link to="/create-product" className={styles.link}>
          <button className={styles.button}>
            <img src={add}></img>
            <p className={styles.text}>add product</p>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
