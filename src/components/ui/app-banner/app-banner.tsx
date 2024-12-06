import React, {FC} from "react";
import styles from "./app-banner.module.css"
import Iphone from "../../../images/Iphone.png"

export const AppBannerUi: FC = () => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.titleContainer}>
                <p className={styles.paragraph}>Pro.Beyond.</p>
                <h1 className={styles.title}>
                    <span className={styles.iphone}>IPhone 14 </span> 
                    <span className={styles.pro}>Pro</span>
                </h1>
                <p className={styles.paragraphDown}>Created to change everything for the better. For everyone</p>
                <button className={styles.button}>Shop Now</button>
            </div>
            <div className={styles.imageContainer}>
                <img src={Iphone}></img>
            </div>
        </div>
    )
}