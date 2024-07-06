import axios from 'axios';
import { Services } from './components/Services';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Show } from './components/Show';

function App() {
  return (
    <div className="bg-zinc-300 w-full h-full">
      <nav className="flex gap-9 justify-center items-center font-medium text-lg py-10">
        <Link to="/">Home </Link>
        <Link to="/Services">services </Link>
        <Link to="/show">Show</Link>
      </nav>
     
      <Routes>
        <Route path="/" element={<Home />}>
          {' '}
        </Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Show" element={<Show/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
