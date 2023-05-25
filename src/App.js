import { useReducer } from "react";

import "./App.css";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_Task":
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload,
        },
      ];

    case "DELETE_TASK":
      return state.filter((d) => d.id !== action.payload);

    default:
      return state;
  }
}
const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="body">
      <h1>Todo List {Todos.lengh}</h1>
      <div>
        <input
          className="input "
          type="text"
          placeholder="Add new item..."
          onBlur={(e) =>
            dispatch({ type: "ADD_Task", payload: e.target.value })
          }
        />
      </div>

      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.name}
          <button
            className="delete-button"
            onClick={() => dispatch({ type: "DELETE_TASK", payload: todo.id })}
          >
            ❌
          </button>
        </li>
      ))}
    </div>
  );
};

export default Todos;
