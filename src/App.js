import React, { PureComponent }  from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import browserHistory from "@/helpers/history";

import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import { onLogout } from "@/stateManagement/userActionApi";
import PublicRoute from "@/components/router/PublicRouter";
import MainLayout from "@/components/layout/MainLayout";

import "@/styles/Main.css";

class App extends PureComponent {

  componentDidMount() {
    // const { onLogout } = this.props;
    // if (isLoginTokenExpired()) onLogout();
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <MainLayout>
            <PublicRoute path="/" exact component={Home} isHeader={true}/>
            <PublicRoute path="/login" exact component={Login}/>
            <PublicRoute path="/signup" exact component={Register} />
          </MainLayout>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ onLogout }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(App);
