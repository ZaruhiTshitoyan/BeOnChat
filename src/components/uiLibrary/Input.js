import React, { useState, useEffect } from "react";

import RenderUiMessages from "./uiMessages/RenderUiMessages";

import styles from "@/styles/Input.css";

const Input = React.forwardRef(({ errorMessage, validateType, value, onChange, onMount, className, required, ...rest }, ref) => {

  // const [value, setValue] = useState("");
  
  const [hasError, setHasError] = useState(false);

  const checkValidType = () => {
    let hasError = false;
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
    // setHasError({ hasError });
    return hasError;
  };

  const onInputChange = e => {
    // const { onChange } = this.props;
    const {
      target
    } = e;
    onChange(target.value);
    // setValue(target.value);
    // this.setState({
    //   value
    // });
  };

  // useEffect(() => {
  //   console.log(ref, ref.current.checkValidType, 558);
  //   onMount(checkValidType());
  // }, []);

  return (
    <div>
      <input
        ref={ref}
        {...rest}
        className={`${styles.input} ${hasError ? styles.errorRed : ""}`}
        onChange={onInputChange}
        // onBlur={checkValidType}
      />
      <RenderUiMessages className="validationMessage" type="warning" errorMessage={hasError}>{errorMessage}</RenderUiMessages>
    </div>
  );
});

export default Input;
