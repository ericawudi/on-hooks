import React, { useState, useRef, useEffect } from "react";

export function OnUseRef() {
  const [name, setName] = useState("");
  //   useRef does not cause your component to rerender. Unlike state
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // another usecase is to refference an html tag
  const inputRef = useRef(null);

  const focus = () => {
    inputRef.current.focus();
  };

  // and another is to store the previous value of a state

  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <p>useRef page</p>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>My name is {name} </h1>
      <h1>And it used to be {prevName.current}</h1>
      <button onClick={focus}>Focus</button>
      <p>My component has rendered {renderCount.current}</p>
    </>
  );
}
