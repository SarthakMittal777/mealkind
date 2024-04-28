import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <main className="bg-white text-black">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Donate to Feed Children</h1>
        <p className="text-lg mb-8">
          Help us provide meals for children in need.
        </p>
        <Link
          to="/thank-you"
          className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
        >
          Donate Now
        </Link>
      </div>
    </main>
  );
};

export default Donate;
