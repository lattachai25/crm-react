import React, { Component } from "react";

export class Login extends Component {
  render() {
    return (
      <div>
        <div className="app-content content">
          <div className="content-overlay" />
          <div className="content-wrapper">
            <div className="content-header row"></div>
            <div className="content-body">
              <section id="auth-login" className="row flexbox-container">
                <div className="col-xl-8 col-11">
                  <div className="card bg-authentication mb-0">
                    <div className="row m-0">
                      <div className="col-md-6 col-12 px-0">
                        <div className="card-content">
                          <center>
                            <img
                              className="img-fluid"
                              src="images/WorldPaintLogo.png"
                              width="50%"
                              alt="logo"
                              style={{ marginTop: "20%" }}
                            />
                          </center>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 px-0">
                        <div className="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                          <div className="card-header pb-1">
                            <div className="card-title">
                              <h4 className="text-center mb-2">
                                Welcome Administrator
                              </h4>
                            </div>
                          </div>
                          <div className="card-content">
                            <div className="card-body">
                              <div className="divider"></div>
                              <form>
                                <div className="form-group mb-50">
                                  <label
                                    className="text-bold-600"
                                    htmlFor="login"
                                  >
                                    Username
                                  </label>
                                  <input
                                    id="inputUserNameAddress"
                                    type="text"
                                    className="form-control"
                                    name="login"
                                    placeholder="Username"
                                  />
                                </div>
                                <div className="form-group">
                                  <label
                                    className="text-bold-600"
                                    htmlFor="exampleInputPassword1"
                                  >
                                    Password
                                  </label>
                                  <input
                                    id="inputPassword"
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                  />
                                </div>
                                <div className="form-group d-flex flex-md-row flex-column justify-content-between align-items-center">
                                  <div className="text-left">
                                    <div className="checkbox checkbox-sm">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                  href="/Register"
                                >
                                  Login
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}

export default Login;
