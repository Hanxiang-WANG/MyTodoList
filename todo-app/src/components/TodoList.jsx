import React, { useState } from 'react'

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

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