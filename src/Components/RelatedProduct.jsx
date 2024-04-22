import dataProduct from "./Assets/data";
import Item from "./Item";

export default function RelatedProduct() {
  return (
    <div className="flex items-center mb-8 justify-center flex-col">
      <h1 className="text-3xl font-semibold">Related Products</h1>
      <hr className="w-52 h-1 bg-zinc-800 rounded-full mt-1" />
      <div className="my-12 flex gap-8">
        {dataProduct.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}
