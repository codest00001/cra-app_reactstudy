import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home'
import About from './About'
import todolist from './todolist'

function App() {
 
  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route> 
      <Route path="/about" element={<About/>}></Route>
      <Route path="/todolist" element={<todolist/>}></Route>
      <Route ></Route>
    </Routes>
  </Router>

  </>
  );
}

export default App;


