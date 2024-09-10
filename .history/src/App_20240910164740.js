import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";




function App() {
 

  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route> 
      <Route path="/about" element={<About/>}></Route>
      <Route></Route>
    </Routes>
  </Router>


  </>
  );
}

export default App;


