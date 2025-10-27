import React from "react";

const ConditionalRendering = () => {
  const loginStatus = true;
  let message;
  const courses = ["html", "css", "JS", "React"];
  function getCourses() {
    return courses.map((course) => <h2 key={course}>{course}</h2>);
  }
  if (loginStatus) {
    message = "welcome";
  } else {
    message = "pls login";
  }

  return (
    <>
      <h3>{message}</h3>
      <h1>{"This is "}Conditonal Rendering</h1>
      {getCourses()}
    </>
  );
};

export default ConditionalRendering;
