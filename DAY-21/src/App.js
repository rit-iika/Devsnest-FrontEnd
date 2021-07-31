import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  const [item, setItem] = useState("");
  const [cal, setCal] = useState("");
  const [showData, setShowData] = useState("");
  const handleSubmit = (event) => {
    setShowData("show_data");
    // setShowData("");
    // console.log(`email:${email}`);
    // event.preventDefault();
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <label>
        <input
          type="text"
          value={item}
          name="item"
          placeholder="Item-name"
          onChange={(e) => setItem(e.target.value)}
        />
      </label>

      <label>
        <input
          type="number"
          value={cal}
          name="cal"
          placeholder="Calorie-amount"
          onChange={(e) => setCal(e.target.value)}
        />
      </label>
      <br />
      <button onClick={(e) => handleSubmit(e)}>Add Item</button>
      {showData ? (
        <div className="show">
          {`${item} - you have consumed ${cal} calories`}
          <button id="del">Delete</button>
          <button id="ed">Edit</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default App;
