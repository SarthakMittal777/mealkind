import { useState } from "react";
import { CharitySidebar } from "../components";
import { server } from "../api";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const CharityCreateRequest = () => {
  const [meals, setMeals] = useState(0);
  const [user] = useAuthState(auth);

  const handleMealRequest = async (e) => {
    e.preventDefault();
    if (meals <= 0) return alert("Please enter the number of meals");
    const { data } = await server.post("/api/v1/charity/request-meals", {
      quantity: meals,
      uid: user.uid,
    });
    alert(data.message);
    setMeals(0);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-dvh">
      <CharitySidebar />
      <main className="overflow-auto p-4 flex-1">
        <h1 className="text-2xl font-semibold">Request Meals</h1>
        <p>Charity Meal Requests</p>

        <div className="w-full">
          <form className="flex items-end gap-4 p-4 border rounded-lg my-4">
            <div className="flex-1">
              <label
                htmlFor="meals"
                className="block text-sm font-medium text-gray-700"
              >
                Meals
              </label>
              <input
                id="meals"
                name="meals"
                type="number"
                value={meals}
                onChange={(e) => setMeals(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleMealRequest}
              className="w-64 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Request Meal
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CharityCreateRequest;
