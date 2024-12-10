import React, { FC } from "react";
import styles from "./product-item.module.css";
import { TCardUI } from "./type";
import { Link } from "react-router-dom";
import Like from "../../../images/Like.png";
import Trash from "../../../images/Trash.png";
import LikeActive from "../../../images/LikeActive.png"

export const ProductItemUi: FC<TCardUI> = ({
  card,
  locationState,
  onLike,
  onDelete,
}) => {
  const { name, image, like, id, price } = card;
  return (
    <div className={styles.productContainer}>
      <div className={styles.buttonContainer}>
        <button className={`${styles.buttonLike} ${styles.button}`} onClick={onLike}>
          <img
            src={like ? LikeActive : Like}
            className={`${styles.like} ${
              like ? styles.likeActive : styles.like
            }`}
          ></img>
        </button>
        <button className={`${styles.buttonDelete} ${styles.button}`}>
          <img src={Trash} className={styles.trash} onClick={onDelete}></img>
        </button>
      </div>
      <Link to={`/${id}`} state={{ background: locationState }} className={styles.link}>
        <img src={image} className={styles.image}></img>
        <p className={styles.text}>{name}</p>
        <p className={styles.price}>{`$${price}`}</p>
      </Link>
      <button className={`${styles.button} ${styles.buttonBuy}`}>Buy Now</button>
    </div>
  );
};
