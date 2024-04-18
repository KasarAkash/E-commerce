import newCollection from "./Assets/new_collections";
import Item from "./Item";

export default function NewCollections() {
  return (
    <div className="my-12 flex flex-col items-center gap-2 ">
      <h1 className="text-zinc-900 text-3xl font-semibold">NEW COLLECTIONS</h1>
      <hr className="w-52 border-2 border-zinc-800 rounded-lg" />
      <div className="mt-12 grid grid-cols-4 gap-8">
        {newCollection.map((item, i) => {
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
