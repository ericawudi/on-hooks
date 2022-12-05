import React, { useState, useReducer } from "react";
import { Todo } from "../components/Todo";

const ACTIONS1 = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer1(state, action) {
  switch (action.type) {
    case ACTIONS1.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS1.DECREMENT:
      return { count: state.count - 1 };
    default:
      return { state };
  }
}

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.todoName)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(todoName) {
  return { id: Date.now(), todoName, completed: false };
}

export function OnUseReducer() {
  const [state, dispatch1] = useReducer(reducer1, { count: 0 });
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const incrementCount = () => {
    dispatch1({ type: ACTIONS1.INCREMENT });
  };

  const decrementCount = () => {
    dispatch1({ type: ACTIONS1.DECREMENT });
  };

  const haddleTodo = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { todoName: name } });
    setName("");
  };

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{state.count}</span>
      <button onClick={incrementCount}>+</button>
      <h2>A slightly complex approach to usecase than the above</h2>
      <form onSubmit={haddleTodo}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
}
