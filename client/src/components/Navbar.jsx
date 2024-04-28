import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../config/firebase";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center bg-white drop-shadow-lg h-20 md:h-16 p-2 md:p-4">
      <div>
        <h1 className="font-brand text-2xl font-semibold">MealKind</h1>
      </div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/donate">Donate</Link>
        {user ? (
          <>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
