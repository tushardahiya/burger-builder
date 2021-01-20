import React, { Component, Suspense } from "react";
import { Route, Switch, withRouter , Redirect } from "react-router-dom";
import {connect} from 'react-redux';

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "../src/containers/BurgerBuilder/BurgerBuilder";
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

// this three const below are helping me lazy load(code splitting) the three pages which are not necessarily gonna load everytime i visit the app.
//also i'm using suspense in the routes below due to using lazy loading

// if need any more explanation i should check lazy loading in react docs..the react.lazy() part

const Auth = React.lazy( () => import('./containers/Auth/Auth') );
const Checkout = React.lazy( () => import("./containers/Checkout/Checkout") );
const Orders =  React.lazy( () => import("./containers/Orders/Orders") );

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {

    let routes = (
        <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/auth" component={Auth} />
            </Suspense>
            <Redirect to='/'/>
        </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <switch>
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={BurgerBuilder} />
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Route path="/auth" component={Auth} />
            </Suspense>
            <Redirect to='/'/>
        </switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !==null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup : () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
