"use client";
import styles from "./Button.module.css";

const Button = ({ label, action, small, medium, primary, secondary }) => {
  return (
    <button className={styles.button} onClick={action}>
      {label}
    </button>
  );
};

export default Button;
