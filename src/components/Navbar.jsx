import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  // darkMode = value to be set to the local storage
  const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      const keyValue = window.localStorage.getItem(key);
      return keyValue ? JSON.parse(keyValue) : initialValue;
    });
    const setKeyValue = value => {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setKeyValue];
  };

  useEffect(() => {
    // if darkMode = true, then assign class name dark-mode
    if (darkMode === true) {
      document.querySelector(`body`).classList.add("dark-mode");
    } else {
      document.querySelector(`body`).classList.remove("dark-mode");
    }
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
