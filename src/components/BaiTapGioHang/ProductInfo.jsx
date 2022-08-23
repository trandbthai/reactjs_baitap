import React, { Component } from "react";

export default class ProductInfo extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="row">
        <div className="col-md-3 text-center">
          <p style={{ fontSize: 20, fontWeight: "bold" }}>{product.tenSP}</p>
          <img src={product.hinhAnh} alt="..." style={{ width: 200 }} />
        </div>
        <div className="col-md-9">
          <h4>Thông số kỹ thuật</h4>
          <table className="table">
            <thead>
              <tr>
                <td>Màn hình</td>
                <td>{product.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{product.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{product.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{product.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{product.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{product.rom}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
