import React, {FC} from "react";
import styles from "./product-details.module.css";
import { TProductDetailsUi } from "./type";

export const ProductDetailsUi: FC<TProductDetailsUi> = ({card, onBack}) => {
    const {name, image, describe, price} = card;
    return (
        <div className={styles.detailsContainer}>
            <button className={`${styles.buttonBack} ${styles.button}`} onClick={onBack}>Назад</button>
            <div className={styles.infoContainer}>
                <img src={image} alt={name} className={styles.image} />
                <div className={styles.describeContainer}>
                    <h1 className={styles.name}>{name}</h1>
                    <h2 className={styles.price}>{`$${price}`}</h2>
                    <p className={styles.describe}>{describe}</p>
                    <button className={`${styles.buttonBuy} ${styles.button}`}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}