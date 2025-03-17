import React from "react";

/**
 * Button Component - Renders a button with a label and click handler.
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.label - The text to be displayed on the button.
 * @param {Function} props.handlerFunc - Function to be executed on button click.
 * @returns {JSX.Element} A styled button element.
 */

const Button = ({ label, handlerFunc } ) => {
  return (
    <div className="btn-comp">
      <button className="btn" onClick={handlerFunc}>{label}</button>
    </div>
  );
};

export default Button;
