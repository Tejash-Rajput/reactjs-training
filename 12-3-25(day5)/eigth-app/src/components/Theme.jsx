import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
/**
 * Theme Component - Displays the current theme and a toggle button.
 * @component
 * @returns {JSX.Element} The Theme component.
 */
const Theme = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  useEffect(() => {
    const t = localStorage.getItem("theme");
    console.log(t);
  }, [theme]);

  return (
    <div>
      <h1>hello</h1>
      <button onClick={toggleTheme}>toggle</button>
      <p>theme is : {theme}</p>
    </div>
  );
};

export default Theme;
