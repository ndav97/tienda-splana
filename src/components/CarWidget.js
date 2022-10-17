import { BsFillCartFill } from "react-icons/bs";

function CarWidget() {
  return (
    <div className="rounded-full h-12 w-12 bg-white flex justify-center items-center ml-auto mr-6 cursor-pointer">
      <BsFillCartFill />
    </div>
  );
}

export default CarWidget;
