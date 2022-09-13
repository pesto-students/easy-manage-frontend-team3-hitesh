import React from "react";

import "antd/dist/antd.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import './App.css'
import "./index.css";




const App = () => {
  
  return (
    <BrowserRouter>
      <Router>
      </Router>
    </BrowserRouter>
  )
};

export default App;
