import React from "react";
import assignClassName from "./Hooks/darkMode";
import useLocalStorage from "./Hooks/useLocalStorage";

const Navbar = () => {
  const [darkMode, setDarkMode] = useLocalStorage("Dark-Mode", false);
  assignClassName(darkMode);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
