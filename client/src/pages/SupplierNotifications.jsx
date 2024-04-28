import { SupplierSidebar } from "../components";

const SupplierNotifications = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-dvh">
      <SupplierSidebar />
      <main className="overflow-auto p-4 flex-1">
        <h1 className="text-2xl font-semibold">Notifications</h1>
        <p>Supplier Notifications</p>

        <div className="flex flex-wrap gap-4 justify-center w-full py-4">
          <div className="bg-white p-4 rounded shadow-md w-full">
            <h2 className="text-lg">You do not have any unread notification</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupplierNotifications;
