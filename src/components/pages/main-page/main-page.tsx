import React, {FC} from "react";
import styles from "./main-page.module.css"
import { AppBanner } from "../../app-banner/app-banner";
import { AppBannerSmall } from "../../app-banner-small/app-banner-small";
import { ControlPanel } from "../../control-panel/control-panel";
import { ProductItems } from "../../product-items.tsx/product-items";

export const MainPage: FC = () => {
    return (
        <main className={styles.mainContainer}>
        <AppBanner/>
        <AppBannerSmall/>
        <ProductItems/>
        </main>
    )
}