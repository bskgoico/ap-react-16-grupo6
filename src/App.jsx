import React, { useState } from 'react'
import './App.css';
import { TaskList, TaskForm, TaskItem } from './components/index.js';

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id != taskId))
  }

  return (
    <>
      <div>
        
      </div>
        <TaskForm addTask={addTask}/>
        <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </>
    
  )
}


export default App
