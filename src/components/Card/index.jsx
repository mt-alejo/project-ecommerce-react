/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { ShoppingCartContext } from "../../context";

function Card({ data, openProductDetails, openShoppingAside }) {
  let { setproductOnDetails, addToShoppingCart } =
    useContext(ShoppingCartContext);

  const showProductDetails = () => {
    openProductDetails();
    setproductOnDetails(data);
  };

  return (
    <div
      className="bg-white/10 cursor-pointer w-60 h-60 border border-black/40 rounded-lg p-2"
      onClick={showProductDetails}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.item.brand}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.item.image_url}
          alt={data.item.name}
        />

        <button
          onClick={(event) => {
            event.stopPropagation();
            addToShoppingCart(data);
            openShoppingAside();
          }}
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 "
        >
          <FaPlus className="text-sm" />
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="card-span text-sm font-light tx-title">
          {data.item.name}
        </span>
        <span className="card-span text-lg font-medium tx-price min-w-[50px]">
          $ {data.item.price}
        </span>
      </p>
    </div>
  );
}

export default Card;
