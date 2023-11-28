import React from "react";
import TaskForm from "../TaskForm/TaskForm";
import "./TaskItem.css";

const TaskItem = ({ tasks, deleteTask, addTask, editTask, index}) => {
  const calculateAnimationDelay = (sec) => {
    const baseDelay = 0.5;
    return sec * baseDelay;
  };

  return (
    <div
      className="item"
      style={{
        animation: "Fade 1s",
        animationDelay: `${calculateAnimationDelay(index)}s`,
      }}
    >
      <h2>{tasks.title}</h2>
      <p>{tasks.description}</p>
      <span>{tasks.createAt}</span>
      {tasks.checkbox ? (
        <span>Tarea completada ✅</span>
      ) : (
        <span>Tarea por completar ⏳</span>
      )}
      <hr />
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <TaskForm editTask={editTask} edit={true} task={tasks} />
        <button onClick={() => deleteTask(tasks.id)}>Eliminar</button>
      </section>
    </div>
  );
};

export default TaskItem;