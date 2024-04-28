import { useEffect, useState } from "react";
import { CharitySidebar } from "../components";
import { server } from "../api";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const CharityHistory = () => {
  const [history, setHistory] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    server
      .post("/api/v1/charity/meal-request-history", { uid: user.uid })
      .then((res) => {
        setHistory(res.data.history);
      });
  }, [user.uid]);

  return (
    <div className="flex flex-col md:flex-row min-h-dvh">
      <CharitySidebar />
      <main className="overflow-auto p-4 flex-1">
        <h1 className="text-2xl font-semibold">History</h1>
        <p>Charity Request History</p>

        <div className="flex flex-col justify-center w-full py-4">
          {history?.map((item, key) => (
            <div
              key={key}
              className="flex justify-between items-center p-4 my-2 border rounded-lg"
            >
              <div>
                <p className="text-lg font-semibold">
                  {item?.quantityRequested} meals
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(item?.createdAt).toString()}
                </p>
                <p className="font-semibold">
                  Fullfilled:{" "}
                  <span className="text-sm text-gray-500">
                    {item?.quantityFulfilled}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CharityHistory;
