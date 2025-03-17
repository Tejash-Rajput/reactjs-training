import React, { useState } from "react";
import Button from "./components/Button";
import Count from "./components/Count";


/**
 * App Component - The main component of the application.
 * Handles state and renders the Button and Count components.
 * @component
 * @returns {JSX.Element} The main application layout.
 */


const App = () => {
  const [count, setCount] = useState(0);

  /**
   * Increments the count state by 1.
   * @function
   */
  const inc = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <Button label="Button" handlerFunc={inc} />
      <Count count={count} />
    </div>
  );
};

export default App;
