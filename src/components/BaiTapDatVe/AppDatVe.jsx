import React, { Component } from "react";
import { connect } from "react-redux";
import "../../Assets/styles/styles.css";
import background from "../../Assets/img/movie/bgmovie.jpg";
export class AppDatVe extends Component {
  renderButton = () => {
    let { data } = this.props.datVeReducer;
    console.log(data);
    return data.map((item, index) => {
      return (
        <div
          className="d-flex justify-content-between"
          style={{ fontSize: 30 }}
          key={index}
        >
          <div className="text-white">{item.hang}</div>
          {item.danhSachGhe.map((ghe, index) => {
            return (
              <button className="ghe" key={index}>
                {ghe.soGhe}
              </button>
            );
          })}
        </div>
      );
    });
  };
  render() {
    return (
      <div
        className="vh-100"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="vh-100" style={{ background: "rgba(0,0,0,0.7)" }}>
          <div className="container">
            <div className="row bookingMovie">
              <div className="col-md-7">
                <h1 className="mt-4 text-warning text-center">
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </h1>
                <p className="text-white text-center">Màn hình</p>
                <div className="screen w-100"></div>
                <div>{this.renderButton()}</div>
                <div className="col-md-4"></div>
              </div>
              <div className="col-md-5 px-5">
                <h3 className="text-white mt-4">DANH SÁCH GHẾ BẠN CHỌN</h3>
                <div className="mt-5" style={{ fontSize: 30 }}>
                  <div>
                    <button className="gheDuocChon"></button>{" "}
                    <span className="text-white">ghế đã đặt</span>
                  </div>
                  <div>
                    <button className="gheDangChon"></button>{" "}
                    <span className="text-white">ghế đang đặt</span>
                  </div>
                  <div>
                    <button className="ghe"></button>{" "}
                    <span className="text-white">ghế chưa đặt</span>
                  </div>
                </div>
                <table className="mt-4 table table-hover table-bordered">
                  <thead className="text-white" style={{ fontSize: 24 }}>
                    <tr>
                      <th>Số ghế</th>
                      <th>Giá</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody
                    className="text-warning"
                    style={{ fontSize: 16 }}
                  ></tbody>
                  <tfoot className="text-warning" style={{ fontSize: 16 }}>
                    <tr>
                      <td></td>
                      <td>Tổng tiền</td>
                      <td>0</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  datVeReducer: state.datVeReducer,
});

export default connect(mapStateToProps)(AppDatVe);
