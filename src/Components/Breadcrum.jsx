import arrow_icon from "./Assets/breadcrum_arrow.png";

export default function Breadcrum(props) {
  const { product } = props;
  return (
    <div className="flex gap-2 items-center font-semibold text-base uppercase my-5 mx-10">
      HOME <img src={arrow_icon} /> SHOP <img src={arrow_icon} />
      {product.category} <img src={arrow_icon} /> {product.name}
    </div>
  );
}
