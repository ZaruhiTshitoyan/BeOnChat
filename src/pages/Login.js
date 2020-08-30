import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Form from "@/components/Form";
import Title from "@/components/uiLibrary/Title";
import Input from "@/components/uiLibrary/Input";
import Button from "@/components/uiLibrary/Button";

import RenderUiMessages from "@/components/uiLibrary/uiMessages/RenderUiMessages";
import { onLogin } from "@/stateManagement/userActionApi";
import { clearUiMessage } from "@/stateManagement/actions/uiActionAlerts";
import isFormValid from "@/utils/formValidation";

import logoImage from "@/images/BeOnChat.png";

import login from "@/styles/Login.css";
import uiMessages from "@/styles/UiMessages.css";

const styles = { ...login,
  ...uiMessages };

const Login = ({ onLogin, clearUiMessage, uiMessage }) => {

  const [authUser, setAuthUser] = useState(
    { email: "",
      password: ""
    });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  // clearUiMessage();

  const handleChange = (name, value) => {
    setAuthUser({
      ...authUser,
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
    const checkedFields = isFormValid(authUser);
    setErrors(checkedFields);
    if (!authUser.email || !authUser.password) return null;
    clearUiMessage();
    onLogin({ email: authUser.email,
      password: authUser.password });
  };

  const loginWarningMessage = (
    <>
        Don&apos;t have an account?
      {" "}
      <NavLink to="/signup" className={styles.linkMediumBlue}>
          Sign Up
      </NavLink>
    </>
  );

  return (
    <div className={styles.loginContainer}>
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
            <Title size="x-large">Login to your Account</Title>
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
              value={authUser.email}
              placeholder="Email"
              autocomplete={"off"}
              validate-type="email"
              errorMessage={""}
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
              value={authUser.password}
              placeholder="Password"
              validate-type="password"
              errorMessage={""}
              hasError={errors.password}
              onChange={value => handleChange("password", value)}
              onFocus={value => handleFocus("password", value)}
              onBlur={value => handleBlur("password", value)}
            />
          </div>
          <div className={styles.uiWarningMessage}>{loginWarningMessage}</div>
          <div className={styles.formItem}>
            <Button type="submit">Log in</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ globalReducer }) => ({
  uiMessage: globalReducer.uiMessage
});

const mapDispatchToProps = dispatch => bindActionCreators({ onLogin,
  clearUiMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
