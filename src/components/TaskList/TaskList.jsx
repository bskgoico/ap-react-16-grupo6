import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import './TaskList.css';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="lista-de-tareas">
      <div className="borde-animado"></div>
      <div className="contenido">
      {
        tasks.length == 0 
        ? <h2>Aun no has ingresado tareas 🤔</h2>
        : tasks.map(task => (
            <TaskItem task={task} key={task.id} deleteTask={deleteTask}/>
          ))
      }
      </div>
    </div>
  );
};

export default TaskList;