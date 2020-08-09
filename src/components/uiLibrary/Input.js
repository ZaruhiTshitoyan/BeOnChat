import React, { useState } from "react";

// import {
//   validateEmail,
//   validatePassword,
//   validateUsername
// } from "../helpers/validationRules";
// import RenderUiMessages from "./uiMessages/RenderUiMessages";

import styles from "@/styles/Input.css";

const Input = ({ errorMessage, validateType, onChange, className, required, ...rest }) => {

  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(false);

  const isValid = hasError => {
    setHasError({
      hasError
    });
  };

  const checkValidType = () => {
    // const { value } = this.state;
    // let hasError = false;
    if (required && !value) {
      hasError = true;
    }
    switch (validateType) {
    case "text":
      if (!validateUsername(value)) {
        hasError = true;
      }
      break;
    case "email":
      if (!validateEmail(value)) {
        hasError = true;
      }
      break;
    case "password":
      if (!validatePassword(value)) {
        hasError = true;
      }
      break;
    default:
      break;
    }
    isValid();
    // return hasError;
  };

  const onInputChange = e => {
    // const { onChange } = this.props;
    const {
      target
    } = e;
    onChange(target.value);
    setValue(target.value);
    // this.setState({
    //   value
    // });
  };

  return (
    <div>
      <input
        {...rest}
        className={`${styles.input} ${hasError ? className : ""}`}
        onChange={onInputChange}
        onBlur={checkValidType}
      />
      {/* <RenderUiMessages className="validationMessage" type="warning" errorMessage={hasError}>{errorMessage}</RenderUiMessages> */}
    </div>
  );
};

export default Input;
