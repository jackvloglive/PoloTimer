import { useState } from "react";

export const TodoBox = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const HandleTodos = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={HandleTodos}>Add</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} style={{ marginTop: "5px" }}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
