import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import "./CartList.css";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    const newQty = Math.max(qty, 1); // Ensure quantity is not less than 1
    setCart({
      ...cart,
      [product.id]: newQty,
    });
  }

  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="CartItem" key={product.id}>
        <img src={product.img} alt={product.name} />
        <div className="Card-content">
          <Link to={"/product/" + product.slug}>{product.name}</Link>
          <span>{cart[product.id] * product.price} $</span>
          <div className="Adition">
            <button
              className="button-minus"
              onClick={() => onQuantityChange(product, cart[product.id] - 1)}
            >
              -
            </button>
            <input
              type="number"
              value={cart[product.id]}
              min={1}
              onChange={(event) => onQuantityChange(product, +event.target.value)}
            />
            <button
              className="button-plus"
              onClick={() => onQuantityChange(product, cart[product.id] + 1)}
            >
              +
            </button>
          </div>
          <button className="Remove" onClick={() => onItemRemove(product)}>
           Delete
          </button>
        </div>
      </div>
    ));

  const totalPrice = productIds.reduce((total, id) => {
    const product = products.find((product) => product.id === id);
    return product ? total + product.price * cart[id] : total;
  }, 0);

  const totalItems = productIds.reduce((total, id) => total + cart[id], 0);

  return (
    <div className="CartList">
      {output}
      <div className="CartSummary">
        <div className="TotalItems">Total Items: {totalItems}</div>
        <div className="TotalPrice">Total Price: {totalPrice} $</div>
      </div>
    </div>
  );
}
