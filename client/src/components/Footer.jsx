import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between p-4 border">
      <div className="text-center space-y-1">
        <h1 className="font-brand text-4xl font-semibold">MealKind</h1>
        <p>Ending hunger one charity at a time!</p>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <Link to="/">Home</Link>
          <Link to="/donate">Donate</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
