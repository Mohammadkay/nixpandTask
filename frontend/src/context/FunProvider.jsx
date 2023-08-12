import React, { useEffect, useState, createContext } from "react";
export const funContext = createContext();
function FunProvider({ children }) {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem(`darkMode`)) || true);
  const [pop, setPop] = useState(false);
  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  const value = { darkMode, setDarkMode, toggle, setPop, pop };
  return <funContext.Provider value={value}>{children}</funContext.Provider>;
}

export default FunProvider;
