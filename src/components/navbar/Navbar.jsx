import React, { useState, useMemo } from "react";
import "../../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  const pageTitle = useMemo(() => {
    switch (location.pathname) {
      case "/":
        return "முகப்பு";
      case "/about":
        return "பற்றி";
      case "/publication":
        return "படைப்புகள்";
      case "/meeting":
        return "சந்திப்புகள்";
      case "/essay":
        return "கட்டுரைகள்";
      case "/urai":
        return "உரைகள்";
      case "/interview":
        return "பேட்டிகள்";
      case "/news":
        return "செய்திகள்";
      case "/contact":
        return "தொடர்பு";
      default:
        return "";
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  // Function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Function to check if any dropdown item is active
  const isDropdownActive = () => {
    const dropdownPaths = [
      "/meeting",
      "/essay",
      "/urai",
      "/interview",
      "/news"
    ];
    return dropdownPaths.some((path) => location.pathname === path);
  };

  return (
    <nav className="navbar1">
      <button className="menu-toggle1" onClick={toggleMenu}>
        {menuActive ? "✕" : "☰"}
      </button>
      <div>
        <ul
          className={`nav-links1 ${menuActive ? "active" : ""}`}
          style={{ fontFamily: "'GIST-TMOTPadma', serif" }}
        >
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/" onClick={closeMenu}>
              முகப்பு
            </Link>
          </li>
          <li className={isActive("/about") ? "active" : ""}>
            <Link to="/about" onClick={closeMenu}>
              பற்றி
            </Link>
          </li>
          <li className={isActive("/publication") ? "active" : ""}>
            <Link to="/publication" onClick={closeMenu}>
              படைப்புகள்
            </Link>
          </li>
          <li className={`dropdown1`}>
            <a>மேலும் ▾</a>
            <ul className="dropdown-content1">
              <li className={isActive("/meeting") ? "active" : ""}>
                <Link to="/meeting" onClick={closeMenu}>
                  சந்திப்புகள்
                </Link>
              </li>
              <li className={isActive("/essay") ? "active" : ""}>
                <Link to="/essay" onClick={closeMenu}>
                  கட்டுரைகள்
                </Link>
              </li>
              <li className={isActive("/urai") ? "active" : ""}>
                <Link to="/urai" onClick={closeMenu}>
                  உரைகள்
                </Link>
              </li>
              <li className={isActive("/interview") ? "active" : ""}>
                <Link to="/interview" onClick={closeMenu}>
                  பேட்டிகள்
                </Link>
              </li>
              <li className={isActive("/news") ? "active" : ""}>
                <Link to="/news" onClick={closeMenu}>
                  செய்திகள்
                </Link>
              </li>
              <li className={isActive("/foreigninterview") ? "active" : ""}>
                <Link to="/foreigninterview" onClick={closeMenu}>
                  வெளிநாட்டு சந்திப்புகள்
                </Link>
              </li>
            </ul>
          </li>
          <li className={isActive("/contact") ? "active" : ""}>
            <Link to="/contact" onClick={closeMenu}>
              தொடர்புக்கு
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`overlay1 ${menuActive ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
      <div className="eachhead">
        {/* <div className="navtitle">{pageTitle}</div> */}

        <div className="logo1">
          <Link to="/subhome">த.ஸ்டாலின் குணசேகரன்</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
