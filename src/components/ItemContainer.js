function ItemContainer({ producto }) {
  return (
    <div className="flex flex-col border-solid border-2 border-gray-400 w-fit">
      <div className="bg-gray-200 text-center">
        <span>{producto.nombre}</span>
      </div>
      <div className="h-70">
        <img
          src={producto.imagen}
          className="object-contain h-full"
          alt="logo"
        />
      </div>
      <div className="text-center">
        <span>S/. {producto.precio}</span>
      </div>
      <div className="flex justify-around">
        <button className="bg-slate-200">+</button>
        <button className="bg-slate-200">-</button>
      </div>
    </div>
  );
}

export default ItemContainer;
