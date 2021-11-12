import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/home";
import Wrapper from './components/Wrapper';

function App() {
  return (
 <Router>
   <div>
     <Wrapper>
       <Navbar />
       <Route exact path="/" component={Home} />

     </Wrapper>
   </div>
 </Router>
  );
}

export default App;
