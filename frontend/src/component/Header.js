import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import "./Home.css";

const Header = ({ setLogin }) => {
  return (
    <div>
      <header>
        <div className="header-header">
          <div className="nav-bar">
            <div className="logo">
              <Link to="/" style={{ textDecoration: "none" }}>
                <h3>
                  Mid-State
                  <br />
                  Institute of Technology (MSIT)
                </h3>
              </Link>
            </div>
            <div className="nav-item" id="navitems">
              <ul>
                <li>
                  <Link to="/" className="student-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="student-link">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/studentDB" className="student-link">
                    Student-DB
                  </Link>
                </li>
                <li>
                  <Link to="/managementdb" className="student-link">
                    Management-DB
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setLogin(false)}
                    to="/singlecrud"
                    className="student-link"
                  >
                    Single-Page-Crud
                  </Link>
                </li>
                <li>
                  <Link to="/logincrud" className="student-link">
                    Login-Crud
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setLogin(false)}
                    to="/loginform"
                    className="student-link"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
