import { useEffect, useState } from "react";
import { SupplierSidebar } from "../components";
import { server } from "../api";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SupplierFulfillRequest = () => {
  const [mealRequests, setMealRequests] = useState(0);
  const [user] = useAuthState(auth);

  const handleMealFulfillRequest = async (mealRequestId) => {
    try {
      await server.put("/api/v1/supplier/fulfill-meal-requests", {
        uid: user.uid,
        mealRequestId,
      });
      setMealRequests(
        mealRequests.filter((mealRequest) => mealRequest._id !== mealRequestId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchMealRequests = async () => {
      try {
        const response = await server.get("api/v1/supplier/meal-requests");
        setMealRequests(response.data.mealRequests);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMealRequests();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-dvh">
      <SupplierSidebar />
      <main className="overflow-auto p-4 flex-1">
        <h1 className="text-2xl font-semibold">Meal Requests</h1>
        <p>Fulfill Meal Requests</p>

        {mealRequests ? (
          <div>
            {mealRequests.map((mealRequest) => (
              <div
                className="flex justify-between items-center border rounded-lg p-4 my-4"
                key={mealRequest._id}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">
                      {mealRequest?.quantityRequested}
                    </p>
                    <p>{mealRequest?.createdBy?.name}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleMealFulfillRequest(mealRequest._id)}
                  className="w-64 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Fulfill Meal
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No meal requests available</p>
        )}
      </main>
    </div>
  );
};

export default SupplierFulfillRequest;
