import React from "react";
import cssstyles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <h3>Footer Section</h3>
      <span className={cssstyles.span1}>
        <a href="https://www.youtube.com/">YouTube</a>
      </span>
    </>
  );
};

export default Footer;
