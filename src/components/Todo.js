import React from "react";
import { ACTIONS } from "../pages/OnUseReducer";

export function Todo({ todo, dispatch }) {
  const { todoName, completed, id } = todo;
  return (
    <div>
      <span style={{ color: completed ? "#AAA" : "#000" }}>{todoName}</span>
      <button
        onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id } })}
      >
        TOGGLE
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id } })}
      >
        DELETE
      </button>
    </div>
  );
}
