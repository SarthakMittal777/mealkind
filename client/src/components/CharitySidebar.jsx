import { NavLink } from "react-router-dom";

const CharitySidebar = () => {
  return (
    <nav className="md:w-60 bg-gray-200 py-4 md:hover:[&>*>a]:bg-gray-300">
      <div className="flex flex-wrap md:block">
        {/* <NavLink to="/charity/profile" className="md:block p-4">
          Profile
        </NavLink> */}
        <NavLink to="/charity/dashboard" className="md:block p-4">
          Dashboard
        </NavLink>
        <NavLink to="/charity/create-request" className="md:block p-4">
          Create Request
        </NavLink>
        <NavLink to="/charity/history" className="md:block p-4">
          History
        </NavLink>
        <NavLink to="/charity/notifications" className="md:block p-4">
          Notifications
        </NavLink>
        <NavLink to="/charity/support" className="md:block p-4">
          Support
        </NavLink>
      </div>
    </nav>
  );
};

export default CharitySidebar;
