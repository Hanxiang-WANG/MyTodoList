import React, { useState } from 'react'

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if(newTask.trim()){
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
    i === index ? { ...task, completed: !task.completed } : task);
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='max-w-md mx-auto m-10 p-4 bg-white rounded-lg shadow-lg'>
        <h1 className='mb-4 text-2xl font-bold'>My Todo List</h1>
        <div className='flex mb-4'>
            <input 
                type='text'
                className='flex-1 p-2 border rounded'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder='Add a new task...'
            />
        </div>
    </div>
  )
}

export default TodoList