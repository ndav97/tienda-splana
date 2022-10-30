import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/products";
import ItemListItem from "./ItemListitem";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setProductos([]);
    getProducts(categoryId)
      .then((response) => {
        setProductos(response);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [categoryId]);
  return (
    <>
      {loading && <h1>Cargando....</h1>}
      <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-4">
        {productos.map((element) => {
          return <ItemListItem producto={element} key={element.id} />;
        })}
      </div>
    </>
  );
}

export default ItemListContainer;
