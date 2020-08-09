import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Button from "@/components/uiLibrary/Button";

const Home = ({ onLogout }) => {
  // const logout = () => {
  //   firebase_config.auth().signOut();
  // };

  return (
    <div>
      {/* <NavLink to="/login">
        <Button>Login</Button>
      </NavLink> */}
      {/* <button onClick={onLogout}>Logout</button> */}
      { "helloooo mello" }
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({
  isLoggedUser: userReducer.isLoggedUser
});

// const mapDispatchToProps = dispatch => bindActionCreators({ onLogout }, dispatch);

export default connect(mapStateToProps)(Home);
