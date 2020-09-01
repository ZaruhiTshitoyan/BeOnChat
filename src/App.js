import React, { PureComponent }  from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import {
//   Router,
//   Route,
//   Switch,
//   Redirect
// } from "react-router-dom";
//
// import browserHistory from "@/helpers/history";
//
// import Home from "@/pages/Home";
// import Register from "@/pages/Register";
// import Login from "@/pages/Login";
// import { onLogout } from "@/stateManagement/userActionApi";
// import PublicRoute from "@/components/router/PublicRouter";
// import MainLayout from "@/components/layout/MainLayout";
// import EmptyLayout from "@/components/layout/EmptyLayout";

import "@/styles/Main.css";
import ChatContainer from "@/components/chatContainer/ChatContainer";

class App extends PureComponent {
  //
  // componentDidMount() {
  //   // const { onLogout } = this.props;
  //   // if (isLoginTokenExpired()) onLogout();
  // }

  render() {
    return (<div>
      {/*// <Router history={browserHistory}>*/}
      {/*//   <Switch>*/}
      {/*//     <MainLayout>*/}
      {/*//       <Route path="/" exact component={Home} />*/}
      {/*//     </MainLayout>*/}
      {/*//     <EmptyLayout>*/}
      {/*//       <PublicRoute path="/signup" component={Register} />*/}
      {/*//     </EmptyLayout>*/}
      {/*//     <EmptyLayout>*/}
      {/*//       <PublicRoute path="/login" component={Login} />*/}
      {/*//     </EmptyLayout>*/}
      {/*//     <Redirect from="*" to="/" />*/}
      {/*//   </Switch>*/}
      {/*// </Router>);*/}
      <ChatContainer />
    </div>);
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators({ onLogout }, dispatch);

// export default connect(
//   null,
//   mapDispatchToProps
// )(App);
export default App