import React, { useState, useEffect } from "react";

import RenderUiMessages from "./uiMessages/RenderUiMessages";

import styles from "@/styles/Input.css";

const Input = ({ hasError, onChange, className, ...rest }) => {
  const onInputChange = e => {
    const {
      target
    } = e;
    onChange(target.value);
  };

  return (
    <div>
      <input
        {...rest}
        className={`${styles.input} ${className} ${hasError ? styles.errorRed : ""}`}
        onChange={onInputChange}
      />
      <RenderUiMessages className="validationMessage" type="warning" errorMessage={hasError}>{hasError}</RenderUiMessages>
    </div>
  );
};

export default Input;
