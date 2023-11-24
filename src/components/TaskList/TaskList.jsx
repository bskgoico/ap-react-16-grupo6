import React from "react";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {
        tasks.lenght == 0 
        ? <h2>Aun no has ingresado tareas </h2>
        : tasks.map(task => (
            <TaskItem task={task} key={task.id}/>
          ))
      }
    </div>
  );
};

export default TaskList;