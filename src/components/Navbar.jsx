import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // if darkMode = true, then assign class name dark-mode
    if (darkMode === true) {
      document.querySelector(`body`).classList.add("dark-mode");
    } else {
      document.querySelector(`body`).classList.remove("dark-mode");
    }

    // darkMode = value to be set to the local storage
  });

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
