import React from "react";

/**
 * TaskItem Component - Represents a single task item in the list.
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.task - The task object.
 * @param {Function} props.toggleComplete - Function to toggle task completion.
 * @param {Function} props.removeTask - Function to remove the task.
 * @returns {JSX.Element} The TaskItem component.
 */
const TaskItem = ({ task, toggleComplete, removeTask }) => {
  return (
    <div>
      <li className={`task-item ${task.completed ? "completed" : ""}`}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span className="text">{task.text}</span>
        <button onClick={() => removeTask(task.id)}>X</button>
      </li>
    </div>
  );
};

export default TaskItem;
