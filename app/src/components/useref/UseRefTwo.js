import React, { useRef } from "react";

function UseRefTwo() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };
  return (
    <div>
      <h2>Accessing DOM Elements(Focus Input Feild)</h2>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRefTwo;
