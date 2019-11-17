import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <div>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://lab49.com">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
              alt="TMDb Logo"
              width="112"
              height="28"
            />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/home">
              Home
            </Link>
            <Link className="navbar-item" to="/moviestats">
              Stats
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">More</div>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/about">
                  News
                </Link>
                <Link className="navbar-item" to="/about">
                  Help
                </Link>
                <hr className="navbar-divider" />
                <Link className="navbar-item" to="/about">
                  Report an Issue
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <label className="lable"> {user} </label>
              <label className="lable"> date </label>
              <div className="buttons">
                {!user && (
                  <Link className="button is-primary" to="/signup">
                    <strong>Sign up</strong>
                  </Link>
                )}

                <Link className="button is-light" to="/login">
                  Log in
                </Link>

                <button className="button is-warning">Sign Out</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
