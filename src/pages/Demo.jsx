import React from "react";
import styles from "./Form.module.css";

const Demo = () => {
  return (
    <div className={styles.formContainer}>
      <h3>Book your Demo</h3>
      <input
        type="text"
        placeholder="Organization Name"
        className={styles.ip}
      />
      <input type="email" placeholder="Email" className={styles.ip} />
      <input type="date" className={styles.ip}/>
      <button className={styles.btn}>Book</button>
    </div>
  );
};

export default Demo;
