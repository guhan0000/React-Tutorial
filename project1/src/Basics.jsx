import React from "react";
const section = "React Components";
const Basics = () => {
  function links() {
    return (
      <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.w3schools.com/html/&ved=2ahUKEwiPuI2r9ZSQAxX6ZmwGHQYFN4kQjBB6BAgUEAE&usg=AOvVaw0vItDRbv3KzO30MW1MRsJ1">
        html
      </a>
    );
  }
  return (
    <>
      <h1>React Basics</h1>
      <dl>
        <dt>HTML</dt>
        <dd>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, harum
          libero sed aliquam, accusantium illo id commodi error aut saepe,
          itaque vel odio. Aperiam, harum accusamus sed molestias adipisci
          praesentium.
        </dd>
        <dt>{section}</dt>
        <dd>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa maxime
          quos laudantium dignissimos cumque incidunt corrupti nam a error ad
          totam sunt quo, officiis necessitatibus in assumenda corporis quas!
          Autem.
        </dd>
      </dl>
      {links()}
    </>
  );
};
function Button() {
  return <button>Click ME</button>;
}
export { Basics, Button };
