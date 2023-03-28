import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function ShopDescription() {
  const [prod, setProd] = useState([]);
  const { id } = useParams();
  console.log("id::", id);

  useEffect(() => {
    const fetchSingleShopProduct = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      const data = await response.json();
      console.log(data[0]);
      setProd(data);
    };
    fetchSingleShopProduct();
  }, [id]);

  return (
    <div className="product-desc">
      <h3> {prod?.title} </h3>
      <img alt="" src={prod?.images} width={250} />
      <p> {prod?.description} </p>
      <b>${prod?.price} </b>
    </div>
  );
}
