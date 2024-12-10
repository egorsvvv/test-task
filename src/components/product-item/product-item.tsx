import React, {FC} from "react";
import { ProductItemUi } from "../ui/product-Item/product-item";
import { useDispatch } from "react-redux";
import { TProduct } from "./type";
import { deleteCard, updateLike} from "../../services/slices/productListSlices";
import { useLocation } from "react-router-dom";
import { AppDispatch } from "../../services/store";

export const ProductItem: FC<TProduct>  = ({ card }) => {
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation()

    const handleLike = () => {
        dispatch(updateLike({ id: card.id, like: !card.like }));
    };

    const handleDelete = () => {
        dispatch(deleteCard(card.id));
      };

    return (
    <ProductItemUi
    card={card}
    locationState={{ background: location }}
    onLike={handleLike}
    onDelete={handleDelete}
    />
    )
}