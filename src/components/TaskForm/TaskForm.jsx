import React from "react";
import { FaPlus } from "react-icons/fa";
import "./TaskForm.css";

const TaskForm = () => {
  return (
    <div>
      <button>
        Nueva tarea <FaPlus />
      </button>
      <div className="modal-background">
        <div className="modal">
          <h2>Agregar una nueva tarea</h2>
          <form>
            <div className="input-container">
              <label htmlFor="title">Ingresa el titulo de tu tarea</label>
              <input type="text" id="title" name="title" placeholder="Titulo"/>
            </div>
            <div className="input-container">
              <label htmlFor="description">Ingrese una descripcion</label>
              <textarea name="description" id="description" placeholder="Descripción"></textarea>
            </div>
            <div className="btn-container">
              <button>Cancelar</button>
              <button>Agregar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
