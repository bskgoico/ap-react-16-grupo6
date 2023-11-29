import React, { useEffect, useState } from "react";
import "./App.css";
import { TaskList, TaskForm } from "./components/index.js";
import "./index.css";

function App() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [],
  );
  const [currentTasks, setCurrentTasks] = useState([]);
  
  const [searchString, setSearchString] = useState("");
  const [searchCondition, setSearchCondition] = useState("");


  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id != taskId));
  };

  const editTask = (taskId, updatedTask) => {
    const index = tasks.findIndex(task => task.id === taskId);

    if (index !== -1) {
      const newTasks = [...tasks];
      newTasks[index] = updatedTask;
      console.log(newTasks);
      setTasks(newTasks);
    }
  }

  const handleChangeFilter = (e) => {
    setSearchString(e.target.value);
  };

  const handleChangeReset = () => {
    setSearchCondition(false)
    setSearchString('')
  }

  const handleChangeFilterCheck = (e) => {
    setSearchCondition(e.target.checked)
  }

  useEffect(() => {
    if (searchCondition === true) {
      setCurrentTasks(
        tasks.filter(
          (task) =>
            task.checkbox === searchCondition &&
            (task.title.toLowerCase().includes(searchString.toLowerCase()) ||
              task.description
                .toLowerCase()
                .includes(searchString.toLowerCase()))
        )
      );
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      setCurrentTasks(
        tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(searchString.toLowerCase()) ||
            task.description.toLowerCase().includes(searchString.toLowerCase())
        )
      );
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [searchString, tasks, searchCondition]);

  return (
		<>
			<h1>LISTA DE TAREAS</h1>
			<div className='container'>
				<div className='controls'>
					<input
						type='text'
						placeholder='Escribe para buscar...'
						className='search-bar'
						value={searchString}
						onChange={handleChangeFilter}
					/>
				</div>

				<div className='filter-container'>
					<div className='check-container'>
						<input
							type='checkbox'
							id='cbox2'
							className='check-box2'
							checked={searchCondition}
							onChange={handleChangeFilterCheck}
						/>
						{
							searchCondition
							?<span>Filtrando tareas completadas</span>
							: <span>Filtrar tareas completadas</span>
						}
					</div>
					<button onClick={handleChangeReset}>Reset filter</button>
				</div>
			</div>
			
			<TaskForm addTask={addTask} editTask={editTask} edit={false} />
			<TaskList
				tasks={currentTasks}
				deleteTask={deleteTask}
				addTask={addTask}
				editTask={editTask}
			/>
		</>
	);
}

export default App;