import { ProductDetailsUi } from "../ui/product-details/product-details";
import React, {FC} from "react";
import { TProductDetails } from "./type";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";

export const ProductDetails: FC = () => {
    const { id } = useParams();
    const card = useSelector((state: RootState) =>
    state.products.product.find((item) => item.id === id)
  );

  const handleBack = () => window.history.back();

  if (!card) {
    return <p>Product not found</p>;
  }

    return (
        <ProductDetailsUi
        card={card}
        onBack={handleBack}
        />
    )
}