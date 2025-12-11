import React from "react";
import { useState, useEffect } from "react";
const useFetch = (api) => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error("could'nt get data");
        }
        return response.json();
      })
      .then((data) => setApiData(data.todos))
      .catch((error) => console.log(error));
  }, []);
  return [apiData];
};

export default useFetch;
