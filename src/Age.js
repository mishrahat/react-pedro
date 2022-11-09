import React from "react";
import { useState } from "react";

export const Age = () => {
  const [increase, setIncrease] = useState(0);
  return (
    <div style={{ display: "flex" }}>
      <h1>{increase}</h1>
      <button
        onClick={() => {
          setIncrease(increase + 1);
        }}
      >
        Click Here
      </button>
    </div>
  );
};
