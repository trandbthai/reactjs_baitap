import React, { Component } from "react";
import "../../Assets/styles/styles.css";

const data = [
  {
    icon: "bi bi-collection",
    title: "Fresh new layout",
    description:
      "With Bootstrap 5, we've created a fresh new layout for this template!",
  },
  {
    icon: "bi bi-cloud-download",
    title: "Free to download",
    description:
      "As always, Start Bootstrap has a powerful collectin of free templates.",
  },
  {
    icon: "bi bi-card-heading",
    title: "Jumbotron hero header",
    description:
      "The heroic part of this template is the jumbotron hero header!",
  },
  {
    icon: "bi bi-bootstrap",
    title: "Feature boxes",
    description:
      "We've created some custom feature boxes using Bootstrap icons!",
  },
  {
    icon: "bi bi-code",
    title: "Simple clean code",
    description:
      "We keep our dependencies up to date and squash bugs as they come!",
  },
  {
    icon: "bi bi-patch-check",
    title: "A name you trust",
    description:
      "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
  },
];

export default class Item extends Component {
  renderProductCard = () => {
    return data.map((item, index) => {
      return (
        <div className="col-lg-6 col-xxl-4 mb-5" key={index}>
          <div className="card bg-light border-0 h-100">
            <div className="card-body p-4 p-lg-5 pt-0 pt-lg-0">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 ">
                <i className={item.icon}></i>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderProductCard()}</div>
      </div>
    );
  }
}
