import React, { useState, useCallback } from "react";
import UseCallbackChild from "./UseCallbackChild";

function UseCallbackMain() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);

  const addTodo = useCallback(() => {
    setTodo((t) => {
      return [...t, "Adding Todo"];
    });
  }, [todo]);
  return (
    <div>
      <h3>useCallback Increment App</h3>
      <p>
        Try running this and click the count increment button. You will notice
        that the Todos component re-renders even when the todos do not change.
      </p>
      <p>
        Why does this not work? We are using memo, so the Todos component should
        not re-render since neither the todos state nor the addTodo function are
        changing when the count is incremented. This is because of something
        called "referential equality". Every time a component re-renders, its
        functions get recreated. Because of this, the addTodo function has
        actually changed.
      </p>
      <h5>
        One reason to use useCallback is to prevent a component from
        re-rendering unless its props have changed.
      </h5>
      <h4 style={{ color: "tomato" }}>
        The useCallback and useMemo Hooks are similar. The main difference is
        that useMemo returns a memoized value and useCallback returns a memoized
        function. You can learn more about useMemo in the useMemo chapter.
      </h4>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Increment {count}
      </button>
      <UseCallbackChild todo={todo} addTodo={addTodo}></UseCallbackChild>
    </div>
  );
}

export default UseCallbackMain;
