import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Shop() {
  const [prod, setProd] = useState([]);
  const fetchProds = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    console.log(data);
    setProd(data);
  };
  useEffect(() => {
    fetchProds();
  }, []);
  return (
    <div className="products-list">
      {prod.map((item) => {
        const {
          id,
          images: [a]
        } = item;
        return (
          <div key={id} className="image-container">
            <Link to={`/shop/${id}`}>
              <img alt="" src={a} width={200} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
