import React, { FC } from "react";
import styles from "./app-banner-small.module.css";
import PlayStation from "../../../images/PlayStation.png";
import airpods from "../../../images/airpods.png";
import vision from "../../../images/vision.png";
import MacBook from "../../../images/MacBook.png";
import PlayStationMob from "../../../images/PlayStationMob.png";
import airPodsMob from "../../../images/airPodsMob.png";
import visionMob from "../../../images/visionMob.png";
import MacBookMob from "../../../images/MacBookMob.png"

export const AppBannerSmallUi: FC = () => {
  return (
    <div className={styles.smallBannerContainer}>
      <div className={styles.psContainer}>
        <div className={styles.psImageContainer}>
            <picture>
                <source srcSet={PlayStationMob} media="(max-width: 1324px)"/>
                <img src={PlayStation}></img>
            </picture>
        </div>
        <div className={styles.psTitleContainer}>
          <h2 className={`${styles.psTitle} ${styles.genTitle}`}>Playstation 5</h2>
          <p className={styles.paragraphSmall}>
            Incredibly powerful CPUs, GPUs, and an SSD with
            <br />
            integrated I/O will redefine your PlayStation experience.
          </p>
        </div>
      </div>
      <div className={styles.airContainer}>
        <div className={styles.airImageContainer}>
            <picture>
                <source srcSet={airPodsMob} media="(max-width: 1324px)"/>
                <img src={airpods}></img>
            </picture>
        </div>
        <div className={styles.airTitleContainer}>
          <h2 className={`${styles.airTitle} ${styles.genTitle}`}>
            <span className={styles.airPods}>
              Apple <br />
              AirPods
            </span>
            <span className={styles.max}> Max</span>
          </h2>
          <p className={styles.paragraphSmall}>
            Computational audio. <br/>
            Listen, it's powerful
          </p>
        </div>
      </div>
      <div className={styles.visContainer}>
        <div className={styles.visImageContainer}>
            <picture> 
                <source srcSet={visionMob} media="(max-width: 1324px)"/>
                <img src={vision}></img>
            </picture>
        </div>
        <div className={styles.visTitleContainer}>
          <h2 className={`${styles.visTitle} ${styles.genTitle}`}>
            <span className={styles.vision}>Apple <br/>Vision </span>
            <span className={styles.pro}>Pro</span>
          </h2>
          <p className={styles.paragraphSmall}>
            An immersive way to<br/> experience entertainment
          </p>
        </div>
      </div>
      <div className={styles.macContainer}>
        <div className={styles.macImageContainer}>
            <picture>
                <source srcSet={MacBookMob} media="(max-width: 1324px)"/>
                <img src={MacBook}></img>
            </picture>
        </div>
        <div className={styles.macTitleContainer}>
          <h2 className={`${styles.macTitle} ${styles.genTitle}`}>
            <span className={styles.mac}>Macbook </span>
            <span className={styles.air}>Air</span>
          </h2>
          <p className={styles.paragraphSmall}>
            The new 15‑inch MacBook Air makes room for more of what<br/> you love
            with a spacious Liquid Retina display.
          </p>
          <button className={styles.button}>Shop Now</button>
        </div>
      </div>
    </div>
  );
};
