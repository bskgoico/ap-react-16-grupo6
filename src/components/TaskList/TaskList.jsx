import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {
        tasks.lenght == 0 
        ? <h2>Aun no has ingresado tareas :( </h2>
        : tasks.map((task) => (
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <span>{task.createAt}</span>
              <button>Finalizar</button>
            </div>
          ))
      }
    </div>
  );
};

export default TaskList;