export default function NewsLetter() {
  return (
    <div className="w-2/3 h-[45vh] flex flex-col items-center m-auto py-16 gap-5 mb-36 bg-orange-500">
      <h1 className="text-4xl text-zinc-900 font-semibold">
        Get Exclusive Offers on your Email
      </h1>
      <p className="text-xl text-zinc-900">
        Subscribe to our newsletter and stay updated.
      </p>
      <div className="flex pl-2 mx-5 items-center justify-between bg-white w-[700px] h-14 rounded-3xl border border-zinc-200">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-[500px] ml-2 text-lg outline-none"
        />
        <button className="w-[200px] h-[50px] text-white rounded-3xl bg-black">
          Subscribe
        </button>
      </div>
    </div>
  );
}
