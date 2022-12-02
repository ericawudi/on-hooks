import { useState } from "react";

function someComplexMathToGetInitialVal() {
  console.log("math running");
  return { count: 1, theme: "blue" };
}

function OnUseState() {
  // const [count, setCount] = useState(someComplexMathToGetInitialVal);
  const [state, setState] = useState(someComplexMathToGetInitialVal);
  const count = state.count;
  const theme = state.theme;
  const decrementCount = function () {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };
  const incrementCount = function () {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };
  return (
    <>
      <p>useState page</p>
      <button onClick={decrementCount}>-</button>
      <span>{count} - </span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default OnUseState;
