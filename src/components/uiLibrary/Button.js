import React from "react";

import styles from "@/styles/Button.css";

const Button = ({ className, children, ...rest }) => {
  const classname = `${styles.button} ${className}`;

  return (
    <>
      <button className={classname} {...rest}>
        {children}
      </button>
    </>
  );
};

export default Button;
