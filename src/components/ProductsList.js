import React from "react";

const ProductsList = ({ data: { name, id, price }, addCart }) => {
  return (
    <div className="flex-colum p-4 bg-neutral-600 rounded-md">
      <h4>{name}</h4>
      <p>price: ${price}.00</p>
      <button
        className="bg-indigo-600 px-2 py-1 rounded-sm text-sm mt-2"
        onClick={() => addCart(id)}
      >
        add
      </button>
    </div>
  );
};

export default ProductsList;
