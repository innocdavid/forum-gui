import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import Replies from './components/replies';

import './App.css';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/dashboard" element={ <Home /> } /> 
          <Route path="/:id/replies" element={ <Replies /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
