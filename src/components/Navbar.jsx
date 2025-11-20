import { useState } from "react";
const Navbar = () => {
  const items = [
    "Jadoo",
    "Destination",
    "Hostels",
    "Flights",
    "Booking",
    "Login",
    "Signup"
  ];
  const itItems = ["ES", "FR", "DE", "IT"];
  const [selectedIt, setSelectedIt] = useState("IT");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (item) => {
    setSelectedIt(item);
    setShowDropdown(false);
  };

   return (
    <nav className="navbar">
      <ul className="nav-list">
        {items.map((item, index) => (
          <li
            key={item}
            className={index === 0 ? "nav-logo" : "nav-item"}
          >
            {item}
          </li>
        ))}
        
        <li
          className="nav-item dropdown dropdown-button"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          {selectedIt} <span className="dropdown-icon">▼</span>
          {showDropdown && (
            <ul className="dropdown-menu">
              {itItems.map((it) => (
                <li
                  key={it}
                  className="dropdown-item"
                  onClick={() => handleSelect(it)}
                >
                  {it}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
