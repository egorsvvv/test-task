import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCard } from "../../services/slices/productListSlices";
import { TCard } from "../../utils/types";
import { AppDispatch } from "../../services/store";

export const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [describe, setDescribe] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name) newErrors.name = "Название продукта обязательно";
    if (price <= 0) newErrors.price = "Цена должна быть больше нуля";
    if (!describe) newErrors.describe = "Описание продукта обязательно";
    if (!image) newErrors.image = "URL изображения обязателен";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const newProduct: TCard = {
        id: Date.now().toString(), 
        name,
        price,
        describe,
        image,
        createdAt: new Date().toISOString(),
        like: false,
      };

      dispatch(addCard(newProduct));

      navigate("/");
    }
  };

  return {
    name,
    setName,
    price,
    setPrice,
    describe,
    setDescribe,
    image,
    setImage,
    handleSubmit,
    errors,
  };
};
