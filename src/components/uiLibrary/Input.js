import React, { useState, useEffect } from "react";

import RenderUiMessages from "./uiMessages/RenderUiMessages";

import styles from "@/styles/Input.css";

const Input = ({ hasError, onChange, onFocus, onBlur, className, errorMessage, value, ...rest }) => {
  const onInputChange = e => {
    hasError = "";
    const {
      target
    } = e;
    onChange(target.value);
  };

  const onInputFocus = e => {
    onFocus(false);
  };

  const onInputBlur = e => {
    if (!value) onBlur(true);
  };

  return (
    <div>
      <input
        {...rest}
        className={`${styles.input} ${className} ${hasError ? styles.errorRed : ""}`}
        onChange={onInputChange}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />
      <RenderUiMessages className="validationMessage" type="warning" userMessage={hasError}>{errorMessage}</RenderUiMessages>
    </div>
  );
};

export default Input;
