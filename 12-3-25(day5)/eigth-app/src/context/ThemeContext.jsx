import { createContext, useState } from "react";
/**
 * Context for managing theme state.
 * @type {React.Context<{ theme: string, toggleTheme: () => void }>}
 */
export const ThemeContext = createContext();

/**
 * ThemeState Component - Provides theme state to the application.
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components.
 * @returns {JSX.Element} The ThemeState provider component.
 */
export const ThemeState = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


  /**
   * Toggles between light and dark themes.
   */

  const toggleTheme = () => {
    const newTheme = theme == "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
