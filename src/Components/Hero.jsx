import handIcon from "./Assets/hand_icon.png";
import arrowIcon from "./Assets/arrow.png";
import heroImage from "./Assets/hero_image.png";

export default function Hero() {
  return (
    <div className="h-screen bg-orange-400 flex">
      <div className="flex flex-col flex-1 justify-center gap-8 pl-24">
        <h2 className="text-lg font-semibold">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="flex items-center gap-5">
            <p className="font-semibold text-7xl">new</p>
            <img src={handIcon} className="w-16" />
          </div>
          <p className="font-semibold text-7xl">collections</p>
          <p className="font-semibold text-7xl">for everyone</p>
        </div>
        <div className="flex justify-center items-center cursor-pointer gap-4 w-72 h-14 mt-4 rounded-3xl bg-teal-500 text-white text-lg font-semibold">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src={heroImage} className="object-contain h-full" />
      </div>
    </div>
  );
}
