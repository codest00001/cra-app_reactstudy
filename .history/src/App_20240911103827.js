import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home'
import About from './About'
import TodoLists from './todolists'

function App() {
 
  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route> 
      <Route path="/about" element={<About/>}></Route>
      <Route path="/todolists" element={<TodoLists/>}></Route>
      <Route ></Route>
    </Routes>
  </Router>

  </>
  );
}

export default App;


