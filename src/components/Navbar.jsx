import { useState } from "react";
const Navbar = () => {
  const items = ["Destination", "Hostels", "Flights", "Booking"];
  const itItems = ["ES", "FR", "DE", "IT"];
  const [selectedIt, setSelectedIt] = useState("IT");
  // const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMobileSelect = (item) => {
    setSelectedIt(item);
    // setShowDropdown(false); 
  };

  return (
    <nav className="navbar">
      <h2 className="nav-logo">Jadoo</h2>
      <div className="hamburger" onClick={() => setMenuOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-list ${menuOpen ? "mobile-open" : ""}`}>
        <li className="mobile-close" onClick={() => setMenuOpen(false)}>
          &times;
        </li>

        {items.map((item) => (
          <li key={item} className="nav-item" onClick={() => setMenuOpen(false)}>
            {item}
          </li>
        ))}
        
        <li className="nav-item login-btn" onClick={() => setMenuOpen(false)}>
          Login
        </li>
        <li className="nav-item signup-btn" onClick={() => setMenuOpen(false)}>
          Signup
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
