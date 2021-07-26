// import React, { useState, useEffect } from "react";

const Card = ({ title, id, value, desc, deleteCard, cal }) => {
  return (
    <div className="Card">
      <div>
        <h2>Calories</h2>
        <h3>Item - {title}</h3>
        <p>
          {desc} is {value} cals
        </p>

        <button onClick={() => deleteCard(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
