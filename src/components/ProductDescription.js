import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function ProductDescription() {
  const [prod, setProd] = useState({});
  const { id } = useParams();
  console.log("id::", id);
  useEffect(() => {
    const fetchSingleProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProd(data);
    };
    fetchSingleProduct();
  }, [id]);
  return (
    <div className="product-desc">
      {/* <h3> Product Description  </h3> */}
      <h3> {prod?.title} </h3>
      <img alt="" src={prod?.thumbnail} width={250} />
      <p> {prod?.description} </p>
      <b>${prod?.price} </b>
    </div>
  );
}
