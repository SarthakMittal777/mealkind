import { useState } from "react";
import { CharitySidebar } from "../components";
import { server } from "../api";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const CharitySupport = () => {
  const [query, setQuery] = useState("");
  const [user] = useAuthState(auth);

  const handleRaiseQuery = async (e) => {
    e.preventDefault();
    if (query === "") return alert("Please enter your query");
    const { data } = await server.post("/api/v1/general/query", {
      query,
      uid: user.uid,
    });
    alert(data.message);
    setQuery("");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-dvh">
      <CharitySidebar />
      <main className="overflow-auto p-4 flex-1">
        <h1 className="text-2xl font-semibold">Support</h1>
        <p>Charity Support</p>

        <div className="w-full">
          <form className="flex items-end gap-4 p-4 border rounded-lg my-4">
            <div className="flex-1">
              <label
                htmlFor="query"
                className="block text-sm font-medium text-gray-700"
              >
                Query
              </label>
              <textarea
                id="query"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleRaiseQuery}
              className="w-64 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Raise Query
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CharitySupport;
