import { Link } from "react-router-dom";
import { heroImage } from "../assets";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";

const Home = () => {
  return (
    <main className="min-h-dvh">
      <section className="relative w-full h-dvh bg-black/50">
        <img
          src={heroImage}
          className="absolute w-full h-dvh object-center object-cover -z-10"
        />
        <div className="w-full h-dvh flex justify-center items-center">
          <div className="w-full md:w-3/5 text-center space-y-2 px-4">
            <h2 className="text-6xl font-bold text-white font-kalnia">
              ENDING THE HUNGER GAME
            </h2>
            <p className="text-2xl text-white/80">
              MealKind promises every child a meal for every meal you eat. We
              believe that no child should go to bed hungry.
            </p>
            <Link
              to="/register"
              className="bg-green-500 text-white font-semibold inline-block py-2 px-4 rounded hover:bg-green-600"
            >
              <FaHandshakeSimple
                className="inline-block mr-2 mb-0.5"
                size={25}
              />
              Join Forces
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-20 bg-gray-100 px-4">
        <div className="w-full md:w-3/5 mx-auto text-center space-y-4">
          <h2 className="text-4xl font-bold font-kalnia">The Hunger Game</h2>
          <p className="text-lg text-gray-600">
            Every year, <b>1.3 billion tonnes</b> of food is wasted. This is
            equivalent to one-third of the food produced globally for human
            consumption
          </p>
          <p className="text-lg text-gray-600">
            <b>690 million</b> people go to bed hungry every night. This is
            equivalent to <b>9%</b> of the world population.
          </p>
        </div>
      </section>
      <section className="w-full py-20 bg-white px-4">
        <div className="w-full md:w-3/5 mx-auto text-center space-y-4">
          <h2 className="text-4xl font-bold font-kalnia">Our Mission</h2>
          <p className="text-lg text-gray-600">
            MealKind is a non-profit organization that provides meals to
            children in need by connecting organisation that take care of
            children with restaurants and food delivery services, who are having
            surplus food.
          </p>
          <p className="text-lg text-gray-600">
            This way surplus food is not wasted and children in need get to eat
            a meal.
          </p>
        </div>
      </section>
      <section className="w-full py-20 bg-gray-100 px-4">
        <div className="w-full md:w-3/5 mx-auto text-center space-y-4">
          <h2 className="text-4xl font-bold font-kalnia">Help Us</h2>
          <p className="text-lg text-gray-600">
            We need your help to make this mission a reality. You can donate
            money or food to help us in our mission.
          </p>
          <Link
            to="/donate"
            className="bg-green-500 text-white font-semibold inline-block py-2 px-4 rounded hover:bg-green-600"
          >
            Donate
            <FaHandHoldingHeart
              className="inline-block ml-2 mb-0.5"
              size={20}
            />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
