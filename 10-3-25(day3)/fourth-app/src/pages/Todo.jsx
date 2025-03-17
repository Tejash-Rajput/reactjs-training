import React, { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  /**
   * Adds a new task to the task list.
   * @function
   * @param {string} text - The task description.
   */
  const addtask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completes: false }]);
  };
  /**
   * Removes a task from the list based on its ID.
   * @function
   * @param {number} taskId - The ID of the task to be removed.
   */
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  /**
   * Toggles the completion status of a task.
   * @function
   * @param {number} taskId - The ID of the task to be toggled.
   */
  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div>
      <TaskInput addtask={addtask} tasks={tasks} />
      <TaskList
        tasks={tasks}
        removeTask={removeTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default Todo;
