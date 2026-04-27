import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";

function Cart() {
  const cartState = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  function handleClearCart() {
    dispatch(clearCart());
  }
  console.log(cartState);
  return (
    <div className="flex flex-col items-center bg-stone-100 min-w-1 h-screen gap-3">
      {cartState.length > 0 && (
        <div className="border border-amber-50 mt-10 min-w-1/3 bg-white px-2 py-4 shadow-md shadow-stone-500">
          <h1 className="text-xl text-stone-600 font-poppins text-center mb-3 border-b border-stone-300">
            Cart
          </h1>
          <ul className="font-poppins flex flex-col gap-4">
            {cartState.map((item) => {
              return (
                <li key={item.id}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-semibold">{item.name}</h2>
                      <p className="text-sm text-stone-500">
                        {item.description}
                      </p>
                    </div>
                    <div>
                      <p>₹{item.price / 100 || item.defaultPrice / 100}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {cartState.length > 0 && (
        <button
          onClick={handleClearCart}
          className="bg-white px-4 py-2 shadow-md shadow-stone-500 rounded-md cursor-pointer font-poppins active:scale-95"
        >
          Clear Cart
        </button>
      )}

      {cartState.length === 0 && (
        <div className="border border-amber-50 mt-10 min-w-1/3 bg-white px-2 py-4 shadow-md shadow-stone-500 font-poppins h-1/3 flex flex-col justify-center gap-3">
          <h1 className="text-center font-semibold text-4xl ">Cart is Empty</h1>
          <p className="text-center text-stone-500">Add items to the cart</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
