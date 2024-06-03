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
        <img src={product.picture} alt={product.name} />
        <div className="Card-content">
          <Link to={"/product/" + product.slug}>{product.name}</Link>
          <span>{cart[product.id] * product.price} som</span>
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
            Remove
          </button>
        </div>
      </div>
    ));

  return <div className="CartList">{output}</div>;
}
