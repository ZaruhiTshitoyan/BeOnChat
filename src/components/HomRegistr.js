import React from "react";
import firebas from "../config/firebase";
import Home from "./Home";
import Register from "./Register";

class HomRegistr extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    firebas.auth().onAuthStateChanged((user) => {
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
