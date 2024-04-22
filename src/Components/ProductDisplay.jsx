import star_icon from "./Assets/star_icon.png";
import star_dull_icon from "./Assets/star_dull_icon.png";
import { useContext } from "react";
import { shopContext } from "../Context/ShopContext";

export default function ProductDisplay({ product }) {
  const { addToCart } = useContext(shopContext);

  return (
    <div className="flex mx-32 my-10 gap-4">
      <div className="flex gap-4 w-1/2">
        <div className="flex flex-col gap-3 items-center justify-between [&>*]:h-[163px]">
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
        </div>
        <div className="">
          <img src={product.image} className="h-[700px] w-[586px] " />
        </div>
      </div>
      <div className="w-1/2 flex flex-col">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <div className="flex gap-1 my-4 [&>*]:object-contain items-center">
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_dull_icon} />
          <p>(120)</p>
        </div>
        <div className="flex gap-2 text-xl font-bold mb-3">
          <div className="line-through text-zinc-500">${product.old_price}</div>
          <div className="text-red-600">${product.new_price}</div>
        </div>

        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint deleniti
          earum porro harum repellendus at distinctio perspiciatis illo, impedit
          facere pariatur modi, aut quis culpa vel, sit reprehenderit iure.
          Magnam?
        </div>

        <div className="w-full">
          <h1 className="mt-10 font-semibold text-2xl">Select Size</h1>
          <div className="flex gap-5 my-7 [&>*]:px-4 [&>*]:py-3 [&>*]:border [&>*]:border-zinc-500 [&>*]:rounded [&>*]:cursor-pointer">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="py-4 px-10 text-white bg-orange-500 font-semibold rounded-md mb-5 w-56"
        >
          ADD TO CART
        </button>

        <p className="">
          <span className="font-semibold">Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
}
