import React, { useState } from 'react'
import './App.css';
import { TaskList, TaskForm, TaskItem } from './components/index.js';

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  return (
    <>
      <div>
        
      </div>
        <TaskForm addTask={addTask}/>
        <TaskList tasks={tasks}/>
    </>
    
  )
}


export default App
