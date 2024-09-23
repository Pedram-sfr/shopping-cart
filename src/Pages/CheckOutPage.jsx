import BascketCard from "../components/BascketCard";
import EmptyCart from '../assets/empty-cart.svg'
import { useCart } from "../context/CartContext";
import BascketSideBar from "../components/BascketSideBar";

import styles from './CheckOutPages.module.css'

function CheckOutPage() {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => dispatch({ type, payload });
  console.log(state);
  if(!state.itemCounter){
    return (
      <div className='notFound'>
        <img src={EmptyCart} alt="" />
        <p>سبد خرید شما خالی است!</p>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <BascketSideBar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.itemSelected.map((product) => (
          <BascketCard key={product.id} data={product} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}

export default CheckOutPage;
