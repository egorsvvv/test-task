import React, { FC, useState } from "react";
import { ProductItemsUI } from "../ui/product-items/product-items";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { ControlPanel } from "../control-panel/control-panel";

export const ProductItems: FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  const card = useSelector((state: RootState) => state.products.product);

  const filterCards = isLiked
    ? card.filter((card) => card.like === true)
    : card;

  return (
    <>
      <ControlPanel isLiked={isLiked} setIsLiked={setIsLiked} />
      <ProductItemsUI cards={filterCards} />
    </>
  );
};
