import { useEffect, useState } from "react";
import { SupplierSidebar } from "../components";
import { server } from "../api";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SupplierHistory = () => {
  const [history, setHistory] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    server
      .post("/api/v1/supplier/meal-fulfill-history", { uid: user.uid })
      .then((res) => {
        setHistory(res.data.history);
      });
  }, [user.uid]);

  return (
    <div className="flex flex-col md:flex-row min-h-dvh">
      <SupplierSidebar />
      <main className="overflow-auto p-4 flex-1">
        <h1 className="text-2xl font-semibold">History</h1>
        <p>Supplier Request History</p>

        <div className="flex flex-col justify-center w-full py-4">
          {history?.map((item, key) => (
            <div
              key={key}
              className="flex justify-between items-center p-4 my-2 border rounded-lg"
            >
              <div>
                <p className="text-lg font-semibold">
                  {item?.quantityRequested} meals for {item?.createdBy?.name}
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

export default SupplierHistory;
