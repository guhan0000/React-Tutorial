import React from "react";
import styles from "./Form.module.css";
import { Outlet, useNavigate } from "react-router-dom";


const Form = () => {
    const navigate=useNavigate();
  return (
    <div className={styles.formContainer}>
      <input type="email" placeholder="Enter Email" className={styles.ip} />
      <textarea
        name="message"
        id=""
        rows={10}
        cols={30}
        placeholder="Message"
        className={styles.ip}
      ></textarea>
      <button className={styles.btn}>Submit</button>
      <button onClick={()=>{navigate("/contact/form/demo")}} style={{width:"80px"}}className={styles.btn}>Book Demo</button>
      <Outlet/>
    </div>
  );
};

export default Form;
