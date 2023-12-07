import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <Route>
      <Navbar />
      <Home/>
      <Footer/> 
    </Route>
  );
};

export default App;
