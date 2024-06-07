import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./SearchResults.css";

export default function SearchResults() {
  const { searchResults } = useContext(AppContext);

  if (searchResults.length === 0) {
    return <div className="SearchResults">No products found</div>;
  }

  return (
    <div className="SearchResults">
      {searchResults.map((product) => (
        <div key={product.id} className="product-item">
          <Link to={`/products/${product.slug}`}>
            <img src={product.img} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
