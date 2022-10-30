import { useNavigate } from "react-router-dom";

function ItemListItem({ producto }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col border-solid border-2 border-gray-400 cursor-pointer"
      onClick={() => navigate(`/item/${producto.id}`)}
    >
      <div className="bg-gray-200 text-center">
        <span>{producto.nombre}</span>
      </div>
      <div className="h-70">
        <img
          src={producto.imagen}
          className="object-contain w-full h-full"
          alt="logo"
        />
      </div>
      <div className="text-center">
        <span>S/. {producto.precio}</span>
      </div>
    </div>
  );
}

export default ItemListItem;
