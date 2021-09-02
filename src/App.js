import React, { useEffect } from "react";
import "./App.css";
import "./animation.css";
import Home from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./routing/PrivateRoute";
import AdminAuthRequire from "./routing/AdminHoc";
import UserAuthRequire from "./routing/UserAuthRequire";

import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/home" />;
              }}
            />
            <Route path="/home" exact component={Home} />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
