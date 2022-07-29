import React, { Component } from "react";

import v1 from "../../Assets/img/glassesImage/v1.png";
import v2 from "../../Assets/img/glassesImage/v2.png";
import v3 from "../../Assets/img/glassesImage/v3.png";
import v4 from "../../Assets/img/glassesImage/v4.png";
import v5 from "../../Assets/img/glassesImage/v5.png";
import v6 from "../../Assets/img/glassesImage/v6.png";
import v7 from "../../Assets/img/glassesImage/v7.png";
import v8 from "../../Assets/img/glassesImage/v8.png";
import v9 from "../../Assets/img/glassesImage/v9.png";

const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: v1,
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: v2,
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: v3,
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: v4,
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: v5,
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: v6,
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: v7,
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: v8,
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: v9,
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class AppThuKinh extends Component {
  state = {
    src: v1,
    name: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };

  renderGlasses = () => {
    return data.map((item, index) => {
      let i = index;
      return (
        <div key={index}>
          <button
            className="p-0 "
            style={{ width: 100 }}
            onClick={() => {
              this.setState({
                src: item.url,
                name: item.name,
                desc: item.desc,
              });
            }}
          >
            <img className="w-100" src={item.url} alt="..." />
          </button>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="bg-app">
        <div style={{ minHeight: "100vh", background: "rgba(0,0,0,0.3)" }}>
          <h3
            className="text-white py-4"
            style={{ background: "rgba(0,0,0,0.5)" }}
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container mt-5 p-5">
            <div className="row px-5">
              <div className="col ml-auto mr-auto d-flex justify-content-center">
                <div className=" item">
                  <div>
                    <img src={this.state.src} alt="..." className="glasses" />
                  </div>
                  <div
                    className="px-1 "
                    style={{
                      background: "rgba(242, 121, 53,0.5)",
                      textAlign: "left",
                    }}
                  >
                    <h4 style={{ fontSize: 16, color: "purple" }}>
                      {this.state.name}
                    </h4>
                    <p
                      className="mb-1"
                      style={{ fontSize: 10, color: "white" }}
                    >
                      {this.state.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <div className=" item"></div>
              </div>
            </div>
            <div className="glasses-list mt-5" style={{ height: 200 }}>
              {this.renderGlasses()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
