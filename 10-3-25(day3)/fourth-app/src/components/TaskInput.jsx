import React, { useState } from "react";
/**
 * TaskInput Component - Allows users to add new tasks.
 * @component
 * @param {Object} props - Component props.
 * @param {Function} props.addTask - Function to add a new task.
 * @param {Array} props.tasks - The current list of tasks.
 * @returns {JSX.Element} The TaskInput component.
 */
const TaskInput = ({ addtask, tasks }) => {
  const [task, setTask] = useState("");


  /**
   * Handles the task submission.
   * @function
   * @param {React.FormEvent} e - The form submit event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = task.trim().toLowerCase();

    if (!newTask) return;
    const alreadyExist = tasks.some((t) => t.text.toLowerCase() === newTask);

    if (alreadyExist) {
      alert("Task already exists!");
    } else {
      addtask(task);
      setTask("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="task-input">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskInput;
