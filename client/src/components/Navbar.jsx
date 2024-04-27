import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../config/firebase";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center bg-white drop-shadow-lg h-16 p-4">
      <div>
        <h1 className="font-brand text-2xl font-semibold">MealKind</h1>
      </div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/donate">Donate</Link>
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={logout}>Logout</button>
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
