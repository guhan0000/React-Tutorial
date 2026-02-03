import React, { useEffect } from "react";
import { useState } from "react";
const ApiFetch2 = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getTodo() {
      if (!loading) {
        console.log("no tasks");
        return;
      } else {
      }
      let response = await fetch(`https://dummyjson.com/todos/`);
      if (response.ok) {
        let data = await response.json();
        setTask(data.todos);
        // console.log(data.todos);
        // console.log(task);
      }
    }
    getTodo();
  }, [loading]);

  return (
    <div>
      <h3>Iopex Task</h3>

      <input type="text" placeholder="enter task" />
      <button>search</button>
      <button
        onClick={() => {
          setTask([]);
          setLoading(false);
        }}
      >
        clear
      </button>
      <button
        onClick={() => {
          setLoading(true);
        }}
      >
        ListAll
      </button>
      {!loading && <p>No tasks</p>}
      {task.map((title, index) => {
        return <h5 key={index}>{title.todo}</h5>;
      })}
    </div>
  );
};

export default ApiFetch2;
