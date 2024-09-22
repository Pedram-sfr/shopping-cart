import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { shortText } from "../helper/helper";

import styles from "./Card.module.css";
import { useCart } from "../context/CartContext";

function Card({ data }) {
  const { id, title, price, image } = data;
  const [state, dispatch] = useCart();

  const clickHandler = () => {
    dispatch({ type: "add", payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button onClick={clickHandler}>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
