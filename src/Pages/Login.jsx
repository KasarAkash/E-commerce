export default function Login() {
  return (
    <div className="w-full py-12 bg-orange-500">
      <div className="w-[580px] bg-white m-auto py-10 px-16">
        <h1 className="my-5 font-semibold text-3xl">Sign Up</h1>
        <div className="flex flex-col gap-6 [&>*]:outline-none [&>*]:border [&>*]:border-zinc-800 [&>*]:h-10 [&>*]:pl-4 [&>*]:rounded-lg">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your E-mail" />
          <input type="password" placeholder="Your Password" />
        </div>
        <button className="w-full bg-orange-500 my-5 h-12 text-lg font-semibold rounded-xl text-white">
          Continue
        </button>
        <p className="text-lg font-medium">
          Already have an account?{" "}
          <span className="text-orange-500">Login here</span>
        </p>
        <div className="flex gap-2 mt-3">
          <input type="checkbox" name="" id="" />
          <p className="text-lg font-medium">I agree to terms and condition</p>
        </div>
      </div>
    </div>
  );
}
