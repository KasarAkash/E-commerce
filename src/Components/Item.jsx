export default function Item(props) {
  return (
    <div className="w-72 hover:scale-105 duration-500">
      <img src={props.image} alt="" />
      <p className="my-2">{props.name}</p>
      <div className="flex gap-5">
        <div className="text-zinc-800 text-lg font-semibold">
          ${props.new_price}
        </div>
        <div className="text-zinc-600 text-lg font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
}
