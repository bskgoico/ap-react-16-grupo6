import React from 'react'
import './App.css';
import { TaskList, TaskForm, TaskItem } from './components/index.js';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchString, setSearchString] = useState('');

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id != taskId))
  }

  const handleChangeFilter = (e) => {
    setSearchString(e.target.value);
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
