import React from 'react';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '300px', backgroundColor: '#808080' }}>
      <h1 style={{ color: '#fff' }}>Add your tasks here</h1>
      <div style={{ marginTop: '30px' }}>
        <a href="/task-modal" style={{ display: 'inline-block', padding: '15px 30px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px', fontSize: '18px', margin: '0 10px' }}>
          Add Task
        </a>
      </div>
    </div>
  );
};

export default Home;
