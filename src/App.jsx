import { useState,useEffect } from 'react';
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import Progresstracker from './components/Progresstracker'
import './components/style.css'


export default function App() {
  const [tasks, setTasks] = useState([]);


  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  });

  const addTask = (task)=>{
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index))
  }

  const cleaTasks = () => {
    setTasks([]);
  }

  return (
    <div className='App'>
      <header>
        <h1 id='head1'>What Next Buddy</h1>
        <p id='head1'><i>friendly Task Manager</i></p>
      </header>
      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks}
       updateTask = {updateTask} 
       deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>

      {tasks.length > 0 && (<button className='clear-btn' onClick={cleaTasks}>clear All Tasks</button>)}
    </div>
  )
}