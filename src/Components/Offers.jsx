import exclusiveImg from "./Assets/exclusive_image.png";

export default function Offers() {
  return (
    <div className="w-[65%] h-[60vh] flex m-auto">
      <div className="">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="">
        <img src={exclusiveImg} alt="" />
      </div>
    </div>
  );
}
