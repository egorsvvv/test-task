import React, {FC} from "react";
import styles from './product-items.module.css'
import { ProductItem } from "../../product-item/product-item";
import { TProductItems } from "./type";

export const ProductItemsUI: FC<TProductItems> = ({cards}) => {
    return (
        <section className={styles.productsContainer}>
             {cards.map((card) => (
                <ProductItem key={card.id} card={card} />
            ))}
        </section>
    )
}