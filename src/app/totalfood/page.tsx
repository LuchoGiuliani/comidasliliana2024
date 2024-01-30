"use client";

import React from "react";

function TotalFood() {
  

  return (
    <div className="">
      {foods.map((food) => (
        <div key={food.id}>
          <h3>{food.name}</h3>
          <p>{food.price}</p>
          <button className="" onClick={() => handleActiveChange(food.id)}>
            {food.activado ? "Desactivar" : "Activar"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default TotalFood;

