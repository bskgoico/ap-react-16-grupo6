import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import "./TaskForm.css";

const TaskForm = ({addTask}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  const handleCloseModal = () => {
    setIsOpenModal(false);
  }

  const handleOpenModal = () => {
    setIsOpenModal(true);
  }

  const handleSubmitTask = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const description = e.target.description.value
    const task = {title, description, createAt: new Date().toDateString(), id: uuidv4()}
    addTask(task)
    handleCloseModal();
  }

  return (
    <div>
      <button onClick={handleOpenModal}>
        Nueva tarea <FaPlus />
      </button>
      {isOpenModal && 
        <div className="modal-background">
          <div className="modal">
            <h2>Agregar una nueva tarea</h2>
            <form onSubmit={handleSubmitTask}>
              <div className="input-container">
                <label htmlFor="title">Ingresa el titulo de tu tarea</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Titulo"
                />
              </div>
              <div className="input-container">
                <label htmlFor="description">Ingrese una descripcion</label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Descripción"
                ></textarea>
              </div>
              <div className="btn-container">
                <button onClick={handleCloseModal}>Cancelar</button>
                <button type="submit">Agregar</button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  );
};

export default TaskForm;
