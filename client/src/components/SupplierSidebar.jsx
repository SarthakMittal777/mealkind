import { NavLink } from "react-router-dom";

const SupplierSidebar = () => {
  return (
    <nav className="md:w-60 bg-gray-200 py-4 md:hover:[&>*>a]:bg-gray-300">
      <div className="flex flex-wrap md:block">
        {/* <NavLink to="/supplier/profile" className="md:block p-4">
          Profile
        </NavLink> */}
        <NavLink to="/supplier/dashboard" className="md:block p-4">
          Dashboard
        </NavLink>
        <NavLink to="/supplier/fulfill-request" className="md:block p-4">
          Fulfill Request
        </NavLink>
        <NavLink to="/supplier/history" className="md:block p-4">
          History
        </NavLink>
        <NavLink to="/supplier/notifications" className="md:block p-4">
          Notifications
        </NavLink>
        <NavLink to="/supplier/support" className="md:block p-4">
          Support
        </NavLink>
      </div>
    </nav>
  );
};

export default SupplierSidebar;
