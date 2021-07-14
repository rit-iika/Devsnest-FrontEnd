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
  <card title= "PIZZA" calorie="150"/>
  <card title="PAV BHAJI" calorie="250"/>
  <card title="NOODLES" calorie="120"/>
  <card title="WAFFLES" calorie="80"/>
  <card title="MOMOS" calorie="50"/>
  <card title="CAKES" calorie="180"/>    

    </div>
    </div>
    );
 
  }
