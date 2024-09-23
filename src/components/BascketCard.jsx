import React from "react";
import { shortText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";

import styles from "./BascketCard.module.css";

function BascketCard({ data, clickHandler }) {
  const { image, title, price, quantity } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortText(title)}</p>
      <span>{price}$</span>
      <span>{price * quantity}$</span>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>+</button>
      </div>
    </div>
  );
}

export default BascketCard;
