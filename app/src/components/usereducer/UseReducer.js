import React, { useReducer } from "react";

//step 3
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "sub":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function UseReducer() {
  //step 1
  const initialState = { count: 0 };
  //step 2
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>{state.count}</h3>
      <button
        onClick={() => {
          dispatch({ type: "add" });
        }}
      >
        Add +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "sub" });
        }}
      >
        Subtract -
      </button>
    </div>
  );
}

export default UseReducer;
