import { Link } from "react-router-dom";
import { IoArrowUndo } from "react-icons/io5";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center h-dvh p-4 bg-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl">Page not found.</p>
      <Link
        to="/"
        className="mt-8 text-white bg-black hover:bg-gray-800 py-2 px-4 rounded-lg space-x-2"
      >
        <IoArrowUndo className="inline-block mb-1" />
        <span>Go back to Home</span>
      </Link>
    </main>
  );
};

export default NotFound;
