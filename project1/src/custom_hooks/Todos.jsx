import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

const Todos = () => {
  const [todos] = useFetch("https://dummyjson.com/todos");
  //   const [todos, setTodos] = useState([]);
  //   useEffect(() => {
  //     fetch("https://dummyjson.com/todos")
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("could'nt get data");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => setTodos(data.todos))
  //       .catch((error) => console.log(error));
  //   }, []);

  return (
    <>
      <h1>ToDos</h1>
      {todos.map((todo, index) => {
        return <h3 key={index}>{todo}</h3>;
      })}
    </>
  );
};

export default Todos;
