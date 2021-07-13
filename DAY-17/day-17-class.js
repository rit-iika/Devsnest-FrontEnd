import React from "react";
import './App.css';
/*
var withourjsx=React.createElement("hi",{
  className:"text",}
  hellow world);*/

var withjsx = <h1>hello worldss</h1>;*/

function App() {
  
  /*return withourjsx;*/
  return withjsx;
}

export default App;

import React from "react";
import './App.css';

function App() {
  var a=1;
  var b=2;
  var title="page header";
  var para="jndiocjnckdjcndi jnicdsjc jncisdcjsdcj";

  var page={
    title1:"anything",
    parag="cndijc cijdnc dmc",
  };
  return (
    <div>
    <h2>{title}</h2>
    <h3>{a}+{b}={a+b}</h3>
    <p>{para}</p>
    <h3>{page.title1.}>
    </div>
    );
}

export default App;
