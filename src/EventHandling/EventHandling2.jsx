import React from "react";

const EventHandling2 = () => {
  const arr = [1, 3, 5, 7, 9];
  const getIndex = (index) => {
    console.log(index);
  };

  return (
    <>
      <ul>
        {arr.map((num, index) => {
          return (
            <React.Fragment key={index}>
              <li key={index}>{num * 2}</li>
              <button
                onClick={() => {
                  getIndex(index);
                }}
              >
                GetIndex
              </button>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default EventHandling2;
