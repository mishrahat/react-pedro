import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {count}
      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: "2px 50px 2px 50px", width: "200px" }}
      >
        Increase
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ padding: "2px 50px 2px 50px", width: "200px" }}
      >
        Decrease
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ padding: "2px 50px 2px 50px", width: "200px" }}
      >
        Set To Zero
      </button>
    </div>
  );
};

export default Counter;
