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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = React.createRef();

  const passwordRef = React.createRef();

  clearUiMessage();

  onReset = () => {
    setEmail("");
    setPassword("");
  };

  const onSubmit = () => {
    const notValidUserData = isFormValid([emailRef, passwordRef]);
    if (notValidUserData) return null;
    clearUiMessage();
    onLogin({ email,
      password });
    onReset();
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
            <Title size="x-large">Qwerty</Title>
          </div>
          <Title size="medium">Login to your Account</Title>
        </div>
        <Form onSubmit={onSubmit}>
          <div className={styles.formItem}>
            <Label htmlFor="username">Username</Label>
            <Input
              ref={emailRef}
              className={styles.errorRed}
              required
              type="text"
              id="email"
              value={email}
              placeholder="Email"
              onChange={value => setEmail(value)}
            />
          </div>
          <div className={styles.formItem}>
            <Label htmlFor="password">Password</Label>
            <Input
              ref={passwordRef}
              className={styles.errorRed}
              required
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={value => setPassword(value)}
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
