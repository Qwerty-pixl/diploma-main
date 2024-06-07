import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import "./CartLink.css";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  // вычислить количество товаров
  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  return (
    <div className="CartLink">
      <NavLink to="/cart">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPfCuxB6bX2O0S278Z2aDv0e5bQ1G5hI5PA&s" alt="cart" />
        {total}
      </NavLink>
    </div>
  );
}