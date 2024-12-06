import React, {FC} from "react";
import styles from "./main-page.module.css"
import { AppBannerUi } from "../../ui/app-banner/app-banner";
import { AppBannerSmallUi } from "../../ui/app-banner-small/app-banner-small";

export const MainPage: FC = () => {
    return (
        <main className={styles.mainContainer}>
        <AppBannerUi/>
        <AppBannerSmallUi/>
        </main>
    )
}