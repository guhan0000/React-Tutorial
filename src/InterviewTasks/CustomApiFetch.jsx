import { React, useState } from "react";
import useFetch from "./useFetch";

const CustomApiFetch = () => {
  // const [post, setPost] = useState("");
  const [input, setInput] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [api, setApi] = useState("");
  const [tasks, notFound] = useFetch(api, load);

  return (
    <>
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
            // setPost(input);
            setApi(`https://dummyjson.com/posts/search?q=${input}`);
            setLoad(true);
            setInput("");
            setError("");

            //   console.log("not found");
            // } else {
            //   setError("");
            // }
            // setError("");
          } else {
            setLoad(false);
            // setPost("");
            setError("Please enter task");
          }
          // setLoad(false);
          // setInput("");
        }}
      >
        search
      </button>
      <button
        onClick={() => {
          setError("");
          setApi("https://dummyjson.com/posts");
          setLoad(true);
        }}
      >
        ListAll
      </button>
      <button
        onClick={() => {
          setLoad(false);
          setError("");
        }}
      >
        clear
      </button>
      <div>
        {tasks.map((task, index) => {
          return <p key={index}>{task.title}</p>;
        })}
        {notFound && <p>No data Found</p>}
        {error && <p>{error}</p>}
      </div>
    </>
  );
};

export default CustomApiFetch;
