import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/products";
import ItemContainer from "../components/ItemContainer";

function Item() {
  const { productId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setItem(null);
    console.log("itemId", productId);
    getProduct(productId)
      .then((product) => {
        console.log("prod", product);
        setItem(product);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      {loading && <h1>Cargando...</h1>}
      {item && <ItemContainer producto={item} />}
    </>
  );
}

export default Item;
