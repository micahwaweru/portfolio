import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';

//Page Imports
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import CV from "./pages/CV";




function App() {
const [userPage, setUserPage] = useState();

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/cv" element={<CV/>}/>
      </Routes>
    </Router>


  )
}

export default App;
