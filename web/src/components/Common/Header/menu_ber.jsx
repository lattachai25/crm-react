import React from "react";
import { Link } from "react-router-dom";

function menu_ber() {
  return (
    <div>
      <div className="header-navbar-shadow" />
      <nav className="header-navbar main-header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top ">
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
                    </div>
                    <span>
                      <img
                        className="round"
                        src="{{ asset('app-assets/images/portrait/small/avatar-s-user.png') }}"
                        alt="avatar"
                        height={40}
                        width={40}
                      />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right pb-0">
                    <a
                      className="dropdown-item"
                      href="{{ route('logout') }}"
                      onclick="event.preventDefault();
                                               document.getElementById('logout-form').submit();"
                    >
                      <i className="bx bx-power-off mr-50" />
                    Logout
                    </a>
                    <form
                      id="logout-form"
                      action="{{ route('logout') }}"
                      method="POST"
                      style={{ display: "none" }}
                    >
                  
                    </form>
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

export default menu_ber;
