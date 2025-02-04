import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (!task) return;
    setTodos([...todos, task]);
    setTask("");
  };
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  
  const editTodo = (index) => {
    setTask(todos[index]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span> {todo}</span>
            <div>
              <button onClick={() => editTodo(index)}>Edit Task</button>
              <button onClick={() => deleteTodo(index)}>Delete Task</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
