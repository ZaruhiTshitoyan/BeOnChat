import React from "react";
import firebase_config from "../config/firebase";

const Home = () => {
  const logout = () => {
    firebase_config.auth().signOut();
  };

  return (
    <div>
      <h1>You are home!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
