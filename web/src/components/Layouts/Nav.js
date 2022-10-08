import React from "react";

function Nav() {
  return (
    <div>
      <div className="header-navbar-shadow" />
      <nav
        className="header-navbar main-header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top"
        style={{ backgroundColor: "#878484 !important" }}
      >
        <div className="navbar-wrapper">
          <div className="navbar-container content">
            <div className="navbar-collapse" id="navbar-mobile">
              <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                <ul className="nav navbar-nav">
                  <li className="nav-item mobile-menu d-xl-none mr-auto">
                    <a
                      className="nav-link nav-menu-main menu-toggle hidden-xs"
                      href="#"
                    >
                      <i className="ficon bx bx-menu" />
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="nav navbar-nav float-right">
                <li className="dropdown dropdown-user nav-item">
                  <a
                    className="dropdown-toggle nav-link dropdown-user-link"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <div className="user-nav d-sm-flex d-none">
                      <span
                        className="user-name"
                        style={{ color: "black !important" }}
                      ></span>
                      <span className="user-status text-muted" />
                    </div>
                    <span>
                      <img
                        className="round"
                        src="../app-assets/images/portrait/small/avatar-s-user.png"
                        alt="avatar"
                        height={40}
                        width={40}
                      />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right pb-0">
                    <a
                      className="dropdown-item"
                      href=""
                      onclick="event.preventDefault();
                                                 document.getElementById('logout-form').submit();"
                    >
                      <i className="bx bx-power-off mr-50" />
                      logout
                    </a>
                    <form
                      id="logout-form"
                      action=""
                      method="POST"
                      style={{ display: "none" }}
                    ></form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
