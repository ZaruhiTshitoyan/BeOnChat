import React from "react";
import firebase_config from "@/config/firebase";
import Home from "@/pages/Home";
import Register from "@/pages/Register";

class HomRegistr extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    firebase_config.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };
  render() {
    return (
      <div className="Spinner">{this.state.user ? <Home /> : <Register />}</div>
    );
  }
}

export default HomRegistr;
