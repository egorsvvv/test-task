import React from "react";
import styles from "./create-product-form.module.css";
import { CreateProduct } from "../../create-product-from/create-product-form";

const CreateProductForm = () => {
  const {
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
  } = CreateProduct();

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPrice(value === "" ? 0 : Number(value));
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Добавить продукт</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Название:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Цена:</label>
          <input
            type="number"
            value={price === null ? "" : price}
            onChange={handlePriceChange}
            className={styles.input}
          />
          {errors.price && <p className={styles.error}>{errors.price}</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Описание:</label>
          <textarea
            value={describe}
            onChange={(e) => setDescribe(e.target.value)}
            className={styles.textarea}
          />
          {errors.describe && <p className={styles.error}>{errors.describe}</p>}
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Изображение (URL):</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className={styles.input}
          />
          {errors.image && <p className={styles.error}>{errors.image}</p>}
        </div>
        <button type="submit" className={styles.button}>
          Добавить продукт
        </button>
      </form>
    </div>
  );
};

export default CreateProductForm;
