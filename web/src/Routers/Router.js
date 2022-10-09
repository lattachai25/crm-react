import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "../components/Layouts/Main_layout";

import LoginForm from "../components/Auth/Login";
import Register from "../components/Auth/Register";

import Dept from "../components/Admin/Dept";
import Zone from "../components/Admin/Zone";

export default () => {
  const adminUser = {
    user: "admin",
    password: "1234",
  };

  const [user, setUser] = useState({ user: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      (details.user = adminUser.user && details.password == adminUser.password)
    ) {
      console.log("Loggend In");
      setUser({
        user: details.user,
        password: details.password,
      });
    } else {
      console.log("Details do not Matcj !! ");
    }
  };

  const Logout = () => {
    setUser({ user: "", password: "" });
  };

  return (
    <div>
      {user.password != "" ? (
        <Router>
          <Switch>
            <Route>
              <Main>
                <Switch>
                  {/* ----------------------------------- Admin -------------------------------------------- */}
                  <Route path="/" exact component={Main} />
                  <Route path="/Dept" component={Dept} />
                  <Route path="/Zone" component={Zone} />
                  {/* ----------------------------------- Sourcing -------------------------------------------- */}
                </Switch>
              </Main>
            </Route>
          </Switch>
        </Router>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
      ;
    </div>
  );
};
