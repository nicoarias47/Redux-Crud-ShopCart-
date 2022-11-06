import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsList from "./ProductsList";
import { v4 as uuid } from "uuid";
import CartList from "./CartList";
import {
  addToCart,
  removeOneFromCart,
  removeAllFromCart,
  clearCart,
} from "../features/shop/shopSlice";

const ShoppingContainer = () => {
  const { products, cart } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const addCart = (id) => dispatch(addToCart(id));

  const removeFromCart = (id, all = false) => {
    if (all) {
      dispatch(removeAllFromCart(id));
    } else {
      dispatch(removeOneFromCart(id));
    }
  };

  const deleteCart = () => dispatch(clearCart());

  return (
    <div className="container mx-xl grid grid-cols-2 w-full gap-5">
      <div className="bg-neutral-800 p-4 rounded-md">
        <h3 className="pb-5">Shop List</h3>
        <div className="grid grid-cols-3 gap-5">
          {products.map((item) => (
            <ProductsList key={uuid()} data={item} addCart={addCart} />
          ))}
        </div>
      </div>
      <div className="bg-neutral-800 p-4 rounded-md max-h-[32rem] overflow-y-auto">
        <div className="flex justify-between pb-5">
          <h3>Cart List</h3>
          <button
            className="bg-red-500 px-2 py-1 text-md rounded-md"
            onClick={deleteCart}
          >
            clear
          </button>
        </div>
        <div className="flex justify-around">
          <h4>
            Total Items: {cart.reduce((acc, curr) => acc + curr.quantity, 0)}
          </h4>
          <h4>
            Total Price:{" "}
            {cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}
          </h4>
        </div>
        <div className="flex-col ">
          {cart.map((item) => (
            <CartList
              key={uuid()}
              data={item}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingContainer;
