import React, { useState, useEffect } from "react";

function UseeffectHome() {
  const [count1, setCount1] = useState(0);
  const [useCount1, SetUseCount1] = useState(0);

  //calls after everytime render that change value of count1

  //   useEffect(() => {
  //     SetUseCount1(useCount1 + 1);
  //   }, [count1]);

  //call after only first render
  useEffect(() => {
    SetUseCount1(useCount1 + 1);
  }, []);

  return (
    <div>
      <h2>useEffect Hook</h2>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Call useEffect after every render {count1}
      </button>
      <h3>Count after every render(count1 change) {useCount1}</h3>
      <h3>Count after only first render(count1 change) {useCount1}</h3>
    </div>
  );
}

export default UseeffectHome;
