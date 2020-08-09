import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PublicRoute = ({ component: Component, isLoggedUser, ...rest }) => {
  console.log(999999, isLoggedUser);
  return (
    <Route
      {...rest}
      render={props => (isLoggedUser ? (
        <Redirect to={{ pathname: "/",
          state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      ))}
    />
  );
};

const mapStateToProps = ({ userReducer }) => ({
  isLoggedUser: userReducer.isLoggedUser,
  type: userReducer.type
});

export default connect(mapStateToProps)(PublicRoute);
