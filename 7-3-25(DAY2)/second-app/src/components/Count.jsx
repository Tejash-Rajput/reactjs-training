import React from "react";

/**
 * Count Component - Displays the current count value.
 * @component
 * @param {Object} props - Component props.
 * @param {number} props.count - The current count value.
 * @returns {JSX.Element} A div displaying the count.
 */

const Count = ({ count }) => {
  return <div className="count">{count}</div>;
};

export default Count;
