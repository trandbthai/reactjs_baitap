import React, { Component } from "react";

export default class Cart extends Component {
  showProduct = () => {
    let { modalProductList, xoaGioHang, themSoLuong, giamSoLuong } = this.props;
    return modalProductList.map((product, index) => {
      return (
        <tr key={index}>
          <td className="text-center">{product.maSP}</td>
          <td>
            <img src={product.hinhAnh} alt="..." style={{ width: 100 }} />
          </td>
          <td>{product.tenSP}</td>
          <td>
            <button
              className="btn btn-primary mx-1 p-1"
              onClick={(e) => {
                e.preventDefault();
                themSoLuong(product);
              }}
            >
              +
            </button>
            <span>{product.soLuong}</span>
            <button
              className="btn btn-primary mx-1 p-1"
              onClick={(e) => {
                e.preventDefault();
                giamSoLuong(product);
              }}
            >
              -
            </button>
          </td>
          <td>{product.giaBan}</td>
          <td>600000</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                xoaGioHang(product);
              }}
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.showProduct()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
