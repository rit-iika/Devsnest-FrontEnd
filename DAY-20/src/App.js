import "./styles.css";
import React, { useState, useEffect } from "react";
import Card from "./components/card";

function App() {
  const [cal, setCal] = useState([
    { id: 1, title: "pizza", desc: "calories consumed by you ", value: 160},
    { id: 2, title: "popcorn", desc: "calories consumed by you ", value: "60" },
    { id: 3, title: "burger", desc: "calories consumed by you ", value: 260 },
    { id: 4, title: "Noodles", desc: "calories consumed by you ", value: 350 },
    { id: 5, title: "Pasta", desc: "calories consumed by you ", value: 400 }
  ]);
  const deleteCard = (id) => {
    const newArr = cal.filter((ex) => ex.id !== id);
    setCal(newArr);
  };

  return (
    <div className="App">
      <h1>Calorie Read Only</h1>
      <div className="box">
        {cal.map((i) => (
          <Card
            title={i.title}
            desc={i.desc}
            value={i.value}
            cal={cal}
            setCal={setCal}
            deleteCard={() => {
              deleteCard(i.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
