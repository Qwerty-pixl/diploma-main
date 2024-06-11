import { useContext } from "react";
import { useMatch } from "react-router";
import { AppContext } from "../../App";
import NotFound from "./NotFound";
import "./Product.css";

export default function Product() {
  const match = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find((product) => product.slug === match.params.slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.slug} />
      <span className="price">{product.price} $</span>
      <div className="description">
        <p>{product.description}</p>
        <p>{product.smell}</p>
      </div>
    </div>
  );
}
