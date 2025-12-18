import React from "react";
import { useState, useEffect } from "react";

const ApiFetch = () => {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  useEffect(() => {
    async function getTodo() {
      let response = await fetch(`https://dummyjson.com/todos/`);
      if (response.ok) {
        let data = await response.json();
        setTask(data.todos);
        // console.log(data.todos);
        // console.log(task);
      }
    }
    getTodo();
  }, []);

  return (
    <div>
      <h3>Iopex Task</h3>
      <input
        type="text"
        placeholder="enter task"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setSearch(input);
        }}
      >
        search
      </button>
      <button
        onClick={() => {
          setInput("");
          setSearch("");
        }}
      >
        clear
      </button>
      <button
        onClick={() => {
          getTodo;
        }}
      >
        ListAll
      </button>
      {task.map((title, index) => {
        return <h5 key={index}>{title.todo}</h5>;
      })}
    </div>
  );
};

export default ApiFetch;
