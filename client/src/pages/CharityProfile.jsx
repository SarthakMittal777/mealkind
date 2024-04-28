import { CharitySidebar } from "../components"

const CharityProfile = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-dvh">
    <CharitySidebar />
    <main className="overflow-auto p-4 flex-1">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p>Charity Dashboard</p>

      <div className="flex flex-wrap gap-4 justify-center w-full py-4">
        <div className="bg-white p-4 rounded shadow-md w-64">
          <h2 className="text-xl font-semibold">Total Donations</h2>
          <p>0</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md w-64">
          <h2 className="text-xl font-semibold">Total Requests</h2>
          <p>0</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md w-64">
          <h2 className="text-xl font-semibold">Total Food Donated</h2>
          <p>0</p>
        </div>
      </div>
    </main>
  </div>
  )
}

export default CharityProfile