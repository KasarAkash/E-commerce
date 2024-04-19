import { useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item";

export default function ShopCategory(props) {
  const { allProducts } = useContext(shopContext);

  return (
    <div className="">
      <img src={props.banner} className="block my-7 mx-auto w-4/5" />
      <div className="flex mx-24 items-center justify-between">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="py-2 px-5 border border-orange-500 items-center gap-3 rounded-3xl flex">
          Sort by <img src={dropdown_icon} className="object-contain" alt="" />
        </div>
      </div>
      <div className="my-5 mx-24 grid grid-cols-4  gap-7">
        {allProducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center my-28 mx-auto w-60 h-16 rounded-full bg-orange-500 text-lg text-white font-semibold">
        Explore More
      </div>
    </div>
  );
}
