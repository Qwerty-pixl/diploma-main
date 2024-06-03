import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import AddProduct from "../AddProduct/AddProduct";
import AddToCart from "../AddToCart/AddToCart";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import "./ProductList.css";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products.filter(product => product.category === category.id)
  .map(product => (
    <div key={product.id} className="Product">
      <img src={product.picture} alt={product.name} />
      <NavLink to={'/products/' + product.slug}>
        {product.name}
      </NavLink>
      <span>{product.price} som</span>
      <AddToCart product={product} />
      <DeleteProduct product={product} />
    </div>
  ));

  return (
    <div className="ProductList">
      <div className="ProductList-auth">
        <AddProduct category={category} />
      </div>
      <div className="ProductList-cards">
        {output}
      </div>
    </div>
  );
}