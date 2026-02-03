import React from "react";
import { useState } from "react";
const ToggleButton = () => {
  const [isOn, setIson] = useState(false);
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("yellow");
  const [like, setLike] = useState(false);

  return (
    <div style={{ backgroundColor: color }}>
      <input
        type="button"
        className="btn btn-info"
        value={isOn ? "ON" : "OFF"}
        onClick={() => {
          setIson(!isOn);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="enter text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {text && <p>{text.length}</p>}

      <button
        className="btn btn-secondary"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide" : "show"}
      </button>
      {show && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          quibusdam eveniet dignissimos modi laudantium blanditiis, mollitia
          obcaecati necessitatibus natus libero cupiditate! Tenetur rem quas
          laboriosam vel ratione error. Maxime, reiciendis?
        </p>
      )}
      <button
        className="btn btn-warning"
        onClick={() => {
          setColor((prev) => (prev == "yellow" ? "blue" : "yellow"));
        }}
      >
        {color}
      </button>
      <div className="container">
        <i
          className={`fa-solid fa-thumbs-up fa-2x ${like ? "text-success" : "text-light"}`}
          onClick={() => {
            setLike(!like);
          }}
        ></i>
      </div>
    </div>
  );
};

export default ToggleButton;
