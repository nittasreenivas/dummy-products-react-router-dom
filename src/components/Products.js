import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Products() {
  const [prod, setProd] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const { products } = await response.json();
    console.log("products::", products);
    setProd(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="products-list">
      {prod.map((item) => {
        const { id, thumbnail } = item;
        return (
          <div key={id} className="image-container">
            <Link to={`/products/${id}`}>
              <img alt="" src={thumbnail} width={200} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
