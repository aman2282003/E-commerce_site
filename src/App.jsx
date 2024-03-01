

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Allroutes } from './Routes/Allroutes';
import { Signup } from './Components/Others/Signup';
import { Cartpage } from './Components/Others/Cartpage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Allroutes />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Cart" element={<Cartpage/>} />
    </Routes>
  );
}

export default App;
