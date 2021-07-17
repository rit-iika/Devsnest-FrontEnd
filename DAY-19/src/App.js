import React from "react";
import './index.css';
import card from "./components/card"

function App() {

  var arr=[1,2,3,4,5,6];

  return(
    <div className="App">
    /*

  <card title= "title1"/>
   <card title= "title2"/>
    <card title= "title3"/>
     <card title= "title4"/>
      <card title= "title5"/>

      <ul>
      {
        arr.map((item,index)=
          <li key={index}>{item}</li>

          )
          /*here a key is used bcoz virtual dom will compare elemnts
      }
      </ul>
      */
      {
        arr.length>4?
        arr.map((item,index)=>
          <card key={index} title={item}/>
          ):
      
 <h1>this list is too small to display </h1>
}
    </div>
    );
 
  }

export default App;

