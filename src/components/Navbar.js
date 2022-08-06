import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Rentals</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Add">Add Apartment</Link>
      </div>
    </nav>
  );
};

export default Navbar;