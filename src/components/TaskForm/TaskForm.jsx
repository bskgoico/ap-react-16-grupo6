import React from "react";
import "./TaskForm.css";


const TaskForm = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Nueva tarea </button>
      {isOpenModal && (
        <div className="modal-background">
          <div className="modal">
            <h2>Agregar nueva tarea</h2>
            <form>
              <div className="input-container">
                <label htmlFor="">Ingresa el titulo de tu tarea:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Titulo ejemplo"
                />
              </div>
              <div className="input-container">
                <label htmlFor="">Ingresa una descripción:</label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Alguna aclaracion/descripcion"
                ></textarea>
              </div>
              <div className="btn-container">
                <button onClick={handleCloseModal}>Cerrar</button>
                <button type="submit">Agregar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskForm;
