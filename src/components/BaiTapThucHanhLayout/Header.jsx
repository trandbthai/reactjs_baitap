import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="bg-dark">
        <div className="container">
          {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 d-flex justify-content-between">
            <a className="navbar-brand" href="#">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto ">
                <li className="nav-item active ">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav> */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <a className="navbar-brand" href="#">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse ml-auto justify-content-end"
              id="collapsibleNavId"
            >
              <div className="navbar-nav ">
                <a className="nav-item nav-link active" href="#">
                  Home
                </a>
                <a className="nav-item nav-link" href="#">
                  About
                </a>
                <a className="nav-item nav-link" href="#">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
