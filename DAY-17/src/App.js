import React from "react";
import './App.css';

function App() {
  return(
    <div className="App">

    <div className="Instructions">
     <h3>INSTRUCTIONS</h3>
     <li>build a container</li>
      <li>create a seperate function and use it as a component</li>
       <li>pass props "calory and food" and call it to main component</li>
    </div>

    <h1>CALORIE READ ONLY</h1>
    
    <div className="container">
      <Block name = "PIZZA" number = "150"/>
      <Block name = "PAV BHAJI" number = "250"/>
      <Block name = "NOODLES" number = "120"/>
      <Block name = "WAFFLES" number = "80"/>
      <Block name = "MOMOS" number = "50"/>
      <Block name = "CAKES" number = "180"/>
    </div>

    </div>
    );
 
  }
  


export default App;
