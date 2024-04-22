import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <div className="w-72 hover:scale-105 duration-500">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
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
