import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default class AppThucHanhLayout extends Component {
  render() {
    return (
      <div
        style={{ height: "100vh" }}
        className="d-flex flex-column justify-content-between"
      >
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
