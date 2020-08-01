import React, { useState } from "react";
import firebas from "../config/firebase";
const Register = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    fireError: "",
    formTitle: "Login",
    loginButton: true,
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const login = (e) => {
    e.preventDefault();
    firebas
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .catch((error) => {
        setUser({
          ...user,
          fireError: error.message,
        });
      });
  };
  const register = (e) => {
    e.preventDefault();
    firebas
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .catch((error) => {
        setUser({
          ...user,
          fireError: error.message,
        });
      });
  };
  const getAction = (action) => {
    if (action === "reg") {
      setUser({
        ...user,
        formTitle: "Register New User",
        loginButton: false,
        fireError: "",
      });
    } else {
      setUser({
        ...user,
        formTitle: "Login",
        loginButton: true,
        fireError: "",
      });
    }
  };

  let errorNotification = user.fireError ? (
    <div className={"Error"}>{user.fireError}</div>
  ) : null;
  let submitBtn = user.loginButton ? (
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
  let login_register = user.loginButton ? (
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
          <input
            type={"text"}
            value={user.email}
            onChange={handleChange}
            name={"email"}
            placeholder={"email"}
          />
          <input
            type={"password"}
            value={user.password}
            onChange={handleChange}
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
