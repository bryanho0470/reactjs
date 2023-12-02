import React, { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
  };
  return (
    <div>
      <h1>My to do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Wrtite your to do.."
        />
        <button>Add todo</button>
      </form>
      <hr />
      {toDos.map((item, index) => ( <li key={index}>{item}</li>))}
    </div>
  );
}

export default App;
