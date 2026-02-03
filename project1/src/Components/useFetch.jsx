import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!url) {
      setData([]);
      return;
    }
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result.posts));
  }, [url]);
  return [data];
};

export default useFetch;
