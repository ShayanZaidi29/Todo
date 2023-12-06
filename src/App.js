import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';

const App = () => {
  return (
    <Route>
      <Navbar />
      <Home/> 
    </Route>
  );
};

export default App;
