import { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import remove_icon from "./Assets/cart_cross_icon.png";

export default function CartItem() {
  const { allProducts, getTotalCartAmount, cartItem, removeFromCart } =
    useContext(shopContext);

  return (
    <div className="my-20 mx-28">
      <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr]  items-center gap-5 font-bold text-lg">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-1 my-4 border-none bg-slate-200" />
      {allProducts.map((e, i) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={i} className="">
              <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-5 font-medium text-lg">
                <img src={e.image} className="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="border mr-20 py-2 rounded">
                  {cartItem[e.id]}
                </button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr className="h-1 my-2 border-none bg-slate-200" />
            </div>
          );
        }
        return null;
      })}
      <div className="flex my-20">
        <div className="flex-1 flex flex-col gap-5 mr-28 ">
          <h1 className="font-semibold text-2xl">Cart Total</h1>
          <div className="[&>*]:flex [&>*]:justify-between">
            <div className="">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="h-1 my-2 border-none bg-slate-200" />
            <div className="">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className="h-1 my-2 border-none bg-slate-200" />
            <div className="font-bold text-lg">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="py-4 w-full px-10 text-white bg-orange-500 font-semibold rounded-md">
            Proceed to Checkout
          </button>
        </div>
        <div className="flex-1 font-medium text-base">
          <p>If you have a promo code, Enter it here</p>
          <div className="mt-3 flex gap-2 ">
            <input
              className="rounded outline-none border p-2"
              type="text"
              placeholder="Promo Code"
            />
            <button className="w-1/3 text-white bg-orange-500 font-semibold rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
