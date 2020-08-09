import React, { useState } from "react";

import firebase_config from "@/config/firebase";

import Input from "@/components/uiLibrary/Input";

const Register = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    fireError: "",
    formTitle: "Login",
    loginButton: true
  });

  const handleChange = (name, value) => {
    console.log(name, value, 546);
    setUser({
      ...user,
      [name]: value
    });
  };
  const login = (e) => {
    e.preventDefault();
    firebase_config
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .catch((error) => {
        setUser({
          ...user,
          fireError: error.message
        });
      });
  };
  const register = (e) => {
    e.preventDefault();
    firebase_config
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .catch((error) => {
        setUser({
          ...user,
          fireError: error.message
        });
      });
  };
  const getAction = (action) => {
    if (action === "reg") {
      setUser({
        ...user,
        formTitle: "Register New User",
        loginButton: false,
        fireError: ""
      });
    } else {
      setUser({
        ...user,
        formTitle: "Login",
        loginButton: true,
        fireError: ""
      });
    }
  };

  const errorNotification = user.fireError ? (
    <div className={"Error"}>{user.fireError}</div>
  ) : null;
  const submitBtn = user.loginButton ? (
    <input className="loginBtn" type="submit" onClick={login} value="Enter" />
  ) : (
    <>
      <input type={"text"} placeholder={"username"} />
      <input type={"text"} placeholder={"surname"} />
      <input
        className="loginBtn"
        type="submit"
        onClick={register}
        value="Register"
      />{" "}
    </>
  );
  const login_register = user.loginButton ? (
    <button className="registerBtn" onClick={() => getAction("reg")}>
      Register
    </button>
  ) : (
    <button className="registerBtn" onClick={() => getAction("login")}>
      Login
    </button>
  );

  return (
    <div className="form_block">
      <div id={"title"}>{user.formTitle}</div>
      <div className={"tile-block"}>
        {errorNotification}
        <form>
          <Input
            type={"text"}
            value={user.email}
            onChange={value => handleChange("email", value)}
            name={"email"}
            placeholder={"email"}
          />
          <Input
            type={"password"}
            value={user.password}
            onChange={value => handleChange("password", value)}
            name={"password"}
            placeholder={"password"}
          />
          {submitBtn}
        </form>
        {login_register}
      </div>
    </div>
  );
};

export default Register;
