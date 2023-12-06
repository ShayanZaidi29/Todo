import React from 'react';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '300px', backgroundColor: '#f4f4f4' }}>
      <h1 style={{ color: '#333' }}>Welcome to Your Todo List App</h1>
      <p style={{ color: '#666', fontSize: '18px', marginTop: '20px' }}>
        Stay organized and keep track of your tasks with our simple and effective todo list app.
      </p>
      <div style={{ marginTop: '30px' }}>
        <a href="/task-modal" style={{ display: 'inline-block', padding: '15px 30px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px', fontSize: '18px', margin: '0 10px' }}>
          Add Task
        </a>
        <a href="/task-list" style={{ display: 'inline-block', padding: '15px 30px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '4px', fontSize: '18px', margin: '0 10px' }}>
          View Tasks
        </a>
      </div>
    </div>
  );
};

export default Home;
