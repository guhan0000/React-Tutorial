import React from "react";

const CondRend2 = () => {
  const skills = ["java", "python", "react"];

  function getSkills() {
    return (
      <ol>
        {skills.map((skill) => {
          return (
            <>
              <li key={skill}>{skill}</li>
            </>
          );
        })}
      </ol>
    );
  }
  return (
    <>
      <h1>Conditional Rendering2</h1>
      {getSkills()}
    </>
  );
};

export default CondRend2;
