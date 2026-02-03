import React from "react";
let arr = ["bajaj", "honda", "yamaha", "tvs"];
const EventHandling1 = () => {
  const handleClick = (event) => {
    if (event.target.checked) {
      console.log("checked");
    } else {
      console.log("un checked");
    }
  };
  function changeHandling(event) {
    console.log(event.target.value);
  }
  return (
    <>
      <h1 className="heading1">Event Handling</h1>
      <h4>Heading{getIndex()}</h4>
      <input type="text" onChange={changeHandling} />
      <button
        onClick={() => {
          console.log("click performed");
          alert("click event triggered");
        }}
      >
        Click ME
      </button>
      <input type="checkbox" onClick={handleClick}></input>
    </>
  );
};
function getIndex() {
  return arr;
}

export default EventHandling1;
