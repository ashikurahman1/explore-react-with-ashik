import React, { useState } from 'react';

const ToDoApp = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const handlerTodo = () => {
    if (task.trim() === '') {
      return alert('Please add some task');
    }
    setTodos([...todos, task]);
    setTask('');
  };

  return (
    <div className="bg-white text-black p-6 shadow-md hover:translate-y-1 transition">
      <h4 className="text-2xl font-semibold text-blue-500">Todo App</h4>
      <div className="my-8 flex">
        <input
          className="input bg-accent flex-1 text-lg"
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button onClick={handlerTodo} className="btn btn-primary">
          Add task
        </button>
      </div>
      <div className="ml-20 text-lg">
        <ul>
          {todos.map((todo, index) => (
            <li className="list-disc" key={index}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoApp;
