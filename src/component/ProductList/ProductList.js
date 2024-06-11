import { useContext, useState } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);
  const [activeProduct, setActiveProduct] = useState(null);

  const handleProductClick = (index) => {
    setActiveProduct(index);
  };

  const output = products
    .filter((product) => product.category === category.id)
    .map((product, index) => (
      <div
        key={product.id}
        className={`Product ${activeProduct === index ? 'active' : ''}`}
        onClick={() => handleProductClick(index)}
      >
        <NavLink to={`/products/${product.slug}`}>
          <img src={product.img} alt={product.name} />
        </NavLink>
        <NavLink to={`/products/${product.slug}`}>{product.name}</NavLink>
        <span>${product.price}</span>
        <AddToCart product={product} />
        <DeleteProduct product={product} />
      </div>
    ));

  return (
    <div className="ProductList">
      {output}
      <AddProduct category={category} />
    </div>
  );
}
