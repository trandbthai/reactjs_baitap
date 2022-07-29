import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="container my-5 p-5 bg-light">
        <h1>A warm welcome!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
          iure? Omnis culpa, quae autem esse dolore veritatis totam perspiciatis
          suscipit tempore fugit vitae recusandae earum mollitia, ratione ipsum
          nobis quia!
        </p>
        <button className="btn btn-primary">Call to action</button>
      </div>
    );
  }
}
