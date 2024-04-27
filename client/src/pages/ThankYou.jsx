import { IoArrowUndo } from "react-icons/io5";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <main className="bg-white">
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <h1 className="text-4xl font-bold">Thank You!</h1>
        <p className="text-lg">Your donation is greatly appreciated.</p>
        <p className="text-lg">
          Together, we can{" "}
          <span className="bg-black text-white rounded-lg p-1">#endhunger</span>{" "}
          and{" "}
          <span className="bg-black text-white rounded-lg p-1">
            #reducewaste
          </span>
          .
        </p>
        <p className="text-lg">
          Join us in our initiative to make a difference.
        </p>
        <Link
          to="/"
          className="mt-8 text-white bg-black hover:bg-gray-800 py-2 px-4 rounded-lg space-x-2"
        >
          <IoArrowUndo className="inline-block mb-1" />
          <span>Go back to Home</span>
        </Link>
      </div>
    </main>
  );
};

export default ThankYou;
