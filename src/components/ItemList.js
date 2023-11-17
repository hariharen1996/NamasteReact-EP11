import React from "react";
import { CDN_URL, DEFAULT_IMAGE } from "../utils/constants";

const ItemList = ({ item }) => {
  console.log(item);
  const { name, price, description, imageId, defaultPrice, itemAttribute } =
    item.card.info;
  return (
    <div className="md:w-full border-gray-300 border-b-2 last:border-b-0 text-left flex justify-between items-center p-3 m-2">
      <div className="w-6/12 sm:w-9/12">
        {itemAttribute.vegClassifier === "VEG" ? "🟢" : "🔴"}
        <h1 className="text-sm md:text-lg font-bold">{name}</h1>
        <p className="text-xs leading-5">
          ₹ {price ? price / 100 : defaultPrice / 100}
        </p>
        <p className="text-xs leading-5">
          {description
            ? description
            : "Serves 1 | Images used are for representation purposes only, and do not indicate size, portion, quantity or color of the actual dish."}
        </p>
      </div>
      <div className="w-6/12 sm:w-4/12 p-2">
        <img
          src={imageId ? CDN_URL + imageId : DEFAULT_IMAGE}
          alt={name}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ItemList;
