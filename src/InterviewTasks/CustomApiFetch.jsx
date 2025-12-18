import { React, useState } from "react";
import useFetch from "./useFetch";

const CustomApiFetch = () => {
  const [post, setPost] = useState("");
  const [input, setInput] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [tasks, notFound] = useFetch(
    `https://dummyjson.com/posts/search?q=${post}`,
    post,
    load
  );

  return (
    <div>
      <h1>Custom Api Fetch</h1>
      <input
        type="text"
        placeholder="enter title"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          // load ? setInput(e.target.value) : setInput("");
        }}
      />
      <button
        onClick={() => {
          if (input.length > 0) {
            setPost(input);
            setLoad(true);
            setInput("");
            setError("");

            // if (notFound) {
            //   // return <p>NO data</p>;
            //   setError("No data found");
            //   console.log("not found");
            // } else {
            //   setError("");
            // }
            // setError("");
          } else {
            setLoad(false);
            setPost("");
            setError("Please enter task");
          }
          // setLoad(false);
          // setInput("");
        }}
      >
        search
      </button>

      {tasks.map((task, index) => {
        return <p key={index}>{task.title}</p>;
      })}
      {notFound && <p>No Data Found</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CustomApiFetch;
