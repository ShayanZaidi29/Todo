import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '20px', minHeight: '600px' }}>
      <h2>Todo List</h2>

      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          style={{ flex: '1', marginRight: '10px' }}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul style={{ listStyle: 'none', padding: '0' }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
            {task}
            <span
              style={{ marginLeft: '10px', cursor: 'pointer' }}
              onClick={() => removeTask(index)}
              role="img"
              aria-label="delete"
            >
              🗑️
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
