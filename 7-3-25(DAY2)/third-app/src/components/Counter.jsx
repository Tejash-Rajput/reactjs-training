import React, { useState } from "react";
import "../scss/main.scss";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [inputCount, setInputCount] = useState(0);

  /**
   * Enables input mode and sets the current count value in the input field.
   * @function
   */
  const handleNumberClick = () => {
    setInputCount(count);
    setIsEditing(true);
  };


  /**
   * Handles the Enter key press event to save the input value.
   * @function
   * @param {React.KeyboardEvent} e - The keydown event.
   */
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleBlurOrEnter();
    }
  };

  /**
   * Updates the count with the input value and exits edit mode.
   * @function
   */
  const handleBlurOrEnter = () => {
    setCount(inputCount);
    setIsEditing(false);
  };
/**
   * Increments the count value by 1.
   * @function
   */
  const increment = () => setCount((prev) => prev + 1);


  /**
   * Decrements the count value by 1, ensuring it does not go below zero.
   * @function
   */
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="counter">
      <h1 className="counter-title">Count:</h1>
      <div className="counter-display">
        {isEditing ? (
          <input
            type="number"
            className="counter-input"
            value={inputCount}
            onChange={(e) => setInputCount(Number(e.target.value))}
            onBlur={handleBlurOrEnter}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <p onClick={handleNumberClick} className="counter-value">
            {count}
          </p>
        )}
      </div>
      <div className="counter-buttons">
        <button className="counter-btn" onClick={increment}>
          +
        </button>
        <button className="counter-decrement" onClick={decrement}>
          -
        </button>
        <button className="counter-reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
