import { useEffect, useState } from "react";
import { CharitySidebar } from "../components";
import { server } from "../api";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const CharityDashboard = () => {
  const [stats, setStats] = useState({});
  const [user] = useAuthState(auth);

  useEffect(() => {
    server
      .post("/api/v1/charity/stats", {
        uid: user.uid,
      })
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, [user.uid]);

  return (
    <div className="flex flex-col md:flex-row min-h-dvh">
      <CharitySidebar />
      <main className="overflow-auto p-4 flex-1">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p>Charity Dashboard</p>

        <div className="flex flex-wrap gap-4 justify-center w-full py-4">
          <div className="bg-white p-4 rounded shadow-md w-64">
            <h2 className="text-xl font-semibold">Total Meals Requested</h2>
            <p>{stats.totalRequested ?? 0}</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md w-64">
            <h2 className="text-xl font-semibold">Total Meals Received</h2>
            <p>{stats.totalFulfilled ?? 0}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CharityDashboard;
