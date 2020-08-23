import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "@/components/Header";

const PublicRoute = ({ component: Component, isHeader, isLoggedUser, ...rest }) => {
  console.log(999999, isLoggedUser);
  return (
    <Route
      {...rest}
      render={props => {
        // isLoggedUser ? (
        //   <Redirect to={{ pathname: "/",
        //     state: { from: props.location } }} />
        // ) : (
        return (
          <>
            {isHeader ? <Header /> : ""}
            <Component {...props} />
          </>
        );
      }
      }
    />
  );
};

const mapStateToProps = ({ userReducer }) => ({
  isLoggedUser: userReducer.isLoggedUser,
  type: userReducer.type
});

export default connect(mapStateToProps)(PublicRoute);
