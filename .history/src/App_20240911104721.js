import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import TodoLists from './pages/TodoLists'
import Nav from './components/Nav'

function App() {
 
  return (
  <>
  <Router>
  <Nav/>

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


