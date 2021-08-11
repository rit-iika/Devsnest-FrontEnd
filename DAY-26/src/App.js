import "./styles.css";
import { useState } from "react";
import { submit } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const username = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>fill your details here :</h1>
      <input type="text" placeholder="username" onChange={(e) => {}}></input>
      <input type="text" placeholder="email id" onChange={(e) => {}}></input>
      <input type="text" placeholder="password" onChange={(e) => {}}></input>
      <button
        onClick={() => {
          dispatch(submit());
        }}
      >
        submit
      </button>
      <span>{username}</span>
    </div>
  );
}
export default App;
