import exclusiveImg from "./Assets/exclusive_image.png";

export default function Offers() {
  return (
    <div className="w-[65%] h-[70vh] flex m-auto  px-32 bg-orange-500 mb-28">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-6xl font-semibold">Exclusive</h1>
        <h1 className="text-6xl font-semibold">Offers For You</h1>
        <p className="font-semibold text-xl">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="w-60 h-14 text-white font-medium text-lg mt-6 cursor-pointer rounded-3xl bg-teal-500">
          Check Now
        </button>
      </div>
      <div className="flex-1 flex justify-end items-center pt-12">
        <img src={exclusiveImg} className="h-full" />
      </div>
    </div>
  );
}
