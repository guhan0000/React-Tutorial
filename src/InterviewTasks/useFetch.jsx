import React from "react";
import { useState, useEffect } from "react";

const useFetch = (url, load) => {
  const [data, setData] = useState([]);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    if (!load) {
      setData([]);
      setNotFound(false);
      return;
    }
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result.posts);
        if (result.posts.length === 0) {
          setNotFound(true);
        } else {
          setNotFound(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url, load]);

  return [data, notFound];
};

export default useFetch;
