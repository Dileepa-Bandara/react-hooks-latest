import React from "react";
import { memo } from "react";

function UseCallbackChild({ todo, addTodo }) {
  console.log("re-render");
  return (
    <div>
      <h3>useCallback Todo App</h3>
      {todo.map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default memo(UseCallbackChild);
