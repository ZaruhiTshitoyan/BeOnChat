import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Form from "@/components/Form";
import Title from "@/components/uiLibrary/Title";
import Input from "@/components/uiLibrary/Input";
import Button from "@/components/uiLibrary/Button";

import RenderUiMessages from "@/components/uiLibrary/uiMessages/RenderUiMessages";
import { onRegister } from "@/stateManagement/userActionApi";
import { clearUiMessage } from "@/stateManagement/actions/uiActionAlerts";
import isFormValid from "@/utils/formValidation";

import logoImage from "@/images/BeOnChat.png";

import join from "@/styles/Join.css";
import uiMessages from "@/styles/UiMessages.css";

const styles = { ...join,
  ...uiMessages };

const Register = ({ onRegister, clearUiMessage, uiMessage }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleChange = (name, value) => {
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleFocus = (name, value) => {
    setErrors({
      ...errors,
      [name]: value
    });
  };

  const handleBlur = (name, value) => {
    setErrors({
      ...errors,
      [name]: value
    });
  };

  const onSubmit = () => {
    const checkedFields = isFormValid(user);
    setErrors(checkedFields);
    if (checkedFields.email || checkedFields.password) return null;
    clearUiMessage();
    onRegister({ email: user.email,
      password: user.password });
  };

  const signupWarningMessage = (
    <>
      Have an account?
      {" "}
      <NavLink to="/login" className={styles.linkMediumBlue}>
        Log in
      </NavLink>
    </>
  );

  return (
    <div className={styles.joinContainer}>
      <div className={styles.formWrapper}>
        <RenderUiMessages
          className={styles.uiMessage}
          type="error"
          userMessage={uiMessage}
        >
          {uiMessage}
        </RenderUiMessages>
        <div className={styles.formHeader}>
          <div className={styles.formHeaderTitle}>
            <img className={styles.rocketImage} src={logoImage} alt="logo" />
            <Title size="x-large">Create your Account</Title>
          </div>
        </div>
        <Form
          noValidate
          onSubmit={onSubmit}
        >
          <div className={styles.formItem}>
            <Input
              required
              type="email"
              id="email"
              value={user.email}
              placeholder="Email"
              autocomplete={"off"}
              validate-type="email"
              errorMessage={errors.email}
              hasError={errors.email}
              onChange={value => handleChange("email", value)}
              onFocus={value => handleFocus("email", value)}
              onBlur={value => handleBlur("email", value)}
            />
          </div>
          <div className={styles.formItem}>
            <Input
              required
              type="password"
              id="password"
              value={user.password}
              placeholder="Password"
              validate-type="password"
              errorMessage={errors.password}
              hasError={errors.password}
              onChange={value => handleChange("password", value)}
              onFocus={value => handleFocus("password", value)}
              onBlur={value => handleBlur("password", value)}
            />
          </div>
          <div className={styles.uiWarningMessage}>{signupWarningMessage}</div>
          <div className={styles.formItem}>
            <Button type="submit">Sign up</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ globalReducer }) => ({
  uiMessage: globalReducer.uiMessage
});

const mapDispatchToProps = dispatch => bindActionCreators({ onRegister,
  clearUiMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);
