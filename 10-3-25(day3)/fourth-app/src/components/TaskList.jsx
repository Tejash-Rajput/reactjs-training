import React from "react";
import TaskItem from "./TaskItem";
/**
 * TaskList Component - Displays the list of tasks.
 * @component
 * @param {Object} props - Component props.
 * @param {Array} props.tasks - The list of tasks.
 * @param {Function} props.removeTask - Function to remove a task.
 * @param {Function} props.toggleComplete - Function to toggle task completion.
 * @returns {JSX.Element} The TaskList component.
 */
const TaskList = ({ tasks, removeTask, toggleComplete }) => {
  return (
    <div>
      <ul className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks yet!</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              removeTask={removeTask}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;
