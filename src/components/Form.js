import React from "react";

import styles from "@/styles/Form.css";

const Form = ({
  className, onSubmit, children, ...rest
}) => {
  const classname = `${styles.form} ${className}`;
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
  };

  return <form className={classname} {...rest} onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
