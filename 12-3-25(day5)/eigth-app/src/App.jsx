import React, { useContext } from "react";
import Theme from "./components/Theme";
import { ThemeContext } from "./context/ThemeContext";
import "./assets/scss/main.scss"
/**
 * Main App Component - Manages the theme context and renders the Theme component.
 * @component
 * @returns {JSX.Element} The App component.
 */
const App = () => {
  const {  theme } = useContext(ThemeContext);
  return (
    <div className={ theme == "light" ? "app-container red" : "app-container blue" }>
      <Theme />
    </div>
  );
};

export default App;
