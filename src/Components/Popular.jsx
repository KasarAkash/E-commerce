import dataProduct from "./Assets/data";
import Item from "./Item";

export default function Popular() {
  return (
    <div className="my-12 flex flex-col items-center gap-2 h-[90vh]">
      <h1 className="text-zinc-900 text-3xl font-semibold">POPULAR IN WOMEN</h1>
      <hr className="w-52 border-2 border-zinc-800 rounded-lg" />
      <div className="mt-12 flex gap-8">
        {dataProduct.map((item, i) => {
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
        })}
      </div>
    </div>
  );
}
