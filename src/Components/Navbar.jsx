import { useState } from "react";
import cartIcon from "./Assets/cart_icon.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="flex justify-around p-6 border-b text-slate-800">
      <h1 className="font-bold text-2xl">E-commerce</h1>
      <ul className="flex items-center gap-8 font-bold text-base">
        <li
          onClick={() => {
            setMenu("shop");
          }}
          className="cursor-pointer flex flex-col gap-2"
        >
          <Link to={"/"}>Shop</Link>
          {menu === "shop" && <hr className="border-red-500 border" />}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
          className="cursor-pointer flex flex-col gap-2"
        >
          <Link to={"/men"}>Men</Link>
          {menu === "men" && <hr className="border-red-500 border" />}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
          className="cursor-pointer flex flex-col gap-2"
        >
          <Link to={"/women"}>Women</Link>
          {menu === "women" && <hr className="border-red-500 border" />}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
          className="cursor-pointer flex flex-col gap-2"
        >
          <Link to={"/kids"}>Kids</Link>
          {menu === "kids" && <hr className="border-red-500 border" />}
        </li>
      </ul>
      <div className="flex items-center gap-6">
        <Link to={"/login"}>
          <button className="active:bg-slate-100 w-40 h-12 font-semibold border border-zinc-900 text-zinc-900 text-base rounded-full">
            Login
          </button>
        </Link>
        <Link to={"/cart"}>
          <img src={cartIcon} alt="" />
        </Link>
        <div className="w-6 h-6 justify-center items-center flex mt-[-30px] ml-[-38px] rounded-full text-sm bg-red-500 text-white font-semibold">
          0
        </div>
      </div>
    </div>
  );
}
