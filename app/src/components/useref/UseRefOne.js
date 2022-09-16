import React, { useState, useEffect, useRef } from "react";

function UseRefOne() {
  const [input, Setinput] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <h2>Update values without rendering the component</h2>
      <input
        type="text"
        onChange={(e) => {
          Setinput(e.target.value);
        }}
      />

      <p> Input value {input}</p>
      <p> Count of component render {count.current}</p>
    </div>
  );
}

export default UseRefOne;
