import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { product, xemChiTiet, themGioHang } = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={product.hinhAnh}
            alt="..."
            className="w-100"
            style={{ height: 400 }}
          />
          <div className="card-body">
            <p className="mx-2" style={{ fontSize: 20, fontWeight: "bold" }}>
              {product.tenSP}
            </p>
            <div>
              <button
                className="btn btn-success mx-2"
                onClick={() => {
                  xemChiTiet(product);
                }}
              >
                Xem chi tiết
              </button>
              <button
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#modelId"
                onClick={() => {
                  themGioHang(product);
                }}
              >
                Thêm giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
