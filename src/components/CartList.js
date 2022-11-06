import { data } from "autoprefixer";
import React from "react";

const CartList = ({ data: { name, price, id, quantity } }) => {
  return (
    <div className="p-4 ">
      <h3>{name}</h3>
      <p>
        ${price}.00 x {quantity} = ${quantity * price}
      </p>
      <p>{quantity}</p>
      <div className="">
        <button>delete one</button>
        <button>delete all</button>
      </div>
    </div>
  );
};

export default CartList;
