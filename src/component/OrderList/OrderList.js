import { useContext } from "react";
import { AppContext } from "../../App";
import "./OrderList.css";

export default function OrderList() {
  const { orders, products } = useContext(AppContext);

  if (!orders || !products) {
    return "No orders found";
  }

  if (!Array.isArray(orders) || !Array.isArray(products)) {
    return "Invalid data";
  }

  // Выводим все заказы
  const output = orders.map((order) => {
    if (!order || typeof order !== 'object') {
      return "Invalid order";
    }

    if (!order.cart || typeof order.cart !== 'object') {
      return "Invalid cart";
    }

    // Вывести содержимое корзины для этого заказа
    const cartOutput = Object.keys(order.cart).map((productId) => {
      if (!productId) {
        return "Invalid product id";
      }

      const product = products.find((product) => product.id === productId);

      if (!product) {
        return "Product not found";
      }

      return (
        <div key={product.id} className="CartCard">
          <img src={product.picture} alt={product.name} />
          <div className="CartCard-details">
            <div>{product.name}</div>
            <div>
              Quantity: {order.cart[productId]} x Price: {product.price} som ={" "}
              {order.cart[productId] * product.price} som
            </div>
          </div>
        </div>
      );
    });

    return (
      <div key={order.id} className="OrderCart">
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