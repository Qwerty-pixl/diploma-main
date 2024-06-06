import { useContext } from "react";
import { AppContext } from "../../App";
import "./OrderList.css";

export default function OrderList() {
  const { orders, products } = useContext(AppContext);

  if (!orders.length || !products.length) {
    return <div>No orders found</div>;
  }

  // Render all orders
  const output = orders.map((order) => {
    if (!order.cart) {
      return (
        <div key={order.id} className="OrderCard">
          <div>
            <strong>Name:</strong> {order.name}
          </div>
          <div>
            <strong>Phone:</strong> {order.phone}
          </div>
          <div>
            <strong>Address:</strong> {order.address}
          </div>
          <div className="OrderCard-cart">No cart found</div>
        </div>
      );
    }

    // Render the cart contents for this order
    const cartOutput = Object.keys(order.cart).map((productId) => {
      const product = products.find((product) => product.id === productId);

      if (!product) {
        return <div key={productId}>Product not found</div>;
      }

      return (
        <div key={product.id} className="CartCard">
          <img src={product.picture} alt={product.name} />
          <div className="CartCard-details">
            <div>{product.name}</div>
            <div>
              Quantity: {order.cart[productId]} x Price: {product.price} ={" "}
              {order.cart[productId] * product.price}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div key={order.id} className="OrderCard">
        <div>
          <strong>Name:</strong> {order.name}
        </div>
        <div>
          <strong>Phone:</strong> {order.phone}
        </div>
        <div>
          <strong>Address:</strong> {order.address}
        </div>
        <div className="OrderCard-cart">{cartOutput}</div>
      </div>
    );
  });

  return <div className="OrderList">{output}</div>;
}
