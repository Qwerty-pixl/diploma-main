import CartList from "../CartList/CartList";
import OrderForm from "../OrderForm/OrderForm";
import "./Cart.css";

export default function Cart() {
  return (
    <div className="Cart">
      <h1>Cart</h1>
      <CartList />
      <div className="OrderForm">
        <OrderForm />
      </div>
    </div>
  );
}
