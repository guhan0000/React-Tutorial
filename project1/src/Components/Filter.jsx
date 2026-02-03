import { useState, useEffect } from "react";
// import React from "react";
import useFetch from "./useFetch";
const Filter = () => {
  const [apiData, setApiData] = useState([]);
  const [value, setValue] = useState("");

  const [postByTag] = useFetch(
    value ? `https://dummyjson.com/posts/tag/${value}` : ""
  );
  useEffect(() => {
    fetch("https://dummyjson.com/posts/tag-list")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setApiData(data);
      });
  }, []);
  return (
    <div>
      <h1>filter</h1>
      <select
        name=""
        id=""
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <option value="" key={""}>
          --Select--
        </option>
        {apiData.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <p>Selected tag {value}</p>
      {postByTag.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};

export default Filter;
