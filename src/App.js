import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import Replies from './components/replies';
import LandingPage from './components/landingPage';

import './App.css';
import Header from './components/header';



function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          < Header/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={ <LandingPage /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/dashboard" element={ <Home /> } /> 
            <Route path="/:id/replies" element={ <Replies /> } />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
