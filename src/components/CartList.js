import React from "react";

const CartList = ({ data: { name, price, id, quantity }, removeFromCart }) => {
  return (
    <div className="flex justify-between p-4 my-4 bg-neutral-600 rounded-md">
      <h3>{name}</h3>
      <p>
        ${price}.00 x {quantity} = ${quantity * price}
      </p>
      <div className="flex flex-col gap-2">
        <button
          className="bg-zinc-800 px-2 py-1 text-xs rounded-md"
          onClick={() => removeFromCart(id)}
        >
          delete one
        </button>
        <button
          className="bg-red-500 px-2 py-1 text-xs rounded-md"
          onClick={() => removeFromCart(id, true)}
        >
          delete all
        </button>
      </div>
    </div>
  );
};

export default CartList;
