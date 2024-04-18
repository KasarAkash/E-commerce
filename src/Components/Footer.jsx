import footerLogo from "./Assets/logo_big.png";
import insta from "./Assets/instagram_icon.png";
import pint from "./Assets/pintester_icon.png";
import whatsapp from "./Assets/whatsapp_icon.png";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="flex items-center gap-5">
        <img src={footerLogo} />
        <p className="text-2xl font-semibold">SHOPPER</p>
      </div>
      <ul className="flex gap-12 text-lg [&>*]:cursor-pointer">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div className="flex gap-5 [&>*]:border [&>*]:cursor-pointer [&>*]:p-3 [&>*]:border-red-400 [&>*]:rounded-full">
        <div className="">
          <img src={insta} />
        </div>
        <div className="">
          <img src={pint} />
        </div>
        <div className="">
          <img src={whatsapp} />
        </div>
      </div>
      <div className="flex w-full mb-7 text-lg flex-col items-center gap-7">
        <hr className="w-4/5 border-none rounded-lg h-[1px] bg-zinc-300" />
        <p>Copyright @2024 - All Right Reserved.</p>
      </div>
    </div>
  );
}
