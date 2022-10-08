import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "../components/Layouts/Main_layout";

import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

import About from "../components/Admin/About";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />

        {/* <Route >
          <MainAdmin>
            <Switch>
              
            </Switch>
          </MainAdmin>
        </Route> */}

        <Route>
          <Main>
            <Switch>
              {/* ----------------------------------- Admin -------------------------------------------- */}
              <Route path="/" exact component={Register} />
              <Route path="/Register" component={Register} />
              <Route path="/About" component={About} />
              {/* ----------------------------------- Sourcing -------------------------------------------- */}
            </Switch>
          </Main>
        </Route>
      </Switch>
    </Router>
  );
};
