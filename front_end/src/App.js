import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Qbe from "./Services/qbe.service";
import Connection from "./Components/Qbe/Connection";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
   

      <div className="jumbotron">
        <Switch>
         
          <Route path="/" component={Connection} />
          
         
        </Switch>
      </div>
    
  </Router>
  );
}

export default App;
