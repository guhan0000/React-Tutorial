import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Form.module.css";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact</h1>
      <button
        onClick={() => {
          navigate("/contact/form");
        }}
        className={styles.btn}
      >
        Get in touch
      </button>

      <Outlet />
    </div>
  );
};

export default Contact;
