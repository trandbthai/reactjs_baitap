import React, { Component } from "react";
import { connect } from "react-redux";
import "../../Assets/styles/styles.css";
import background from "../../Assets/img/movie/bgmovie.jpg";
export class AppDatVe extends Component {
  renderButton = () => {
    let { data } = this.props.datVeReducer;
    return data.map((item, index) => {
      if (item.hang) {
        return (
          <div className="d-flex justify-content-between" key={index}>
            <div className="text-white" style={{ fontSize: 30 }}>
              {item.hang}
            </div>
            {item.danhSachGhe.map((ghe, index) => {
              let classGheDangChon = ghe.dangDat ? "gheDangChon" : "ghe";
              let classGheDaChon = ghe.daDat ? "gheDuocChon" : "";

              return (
                <button
                  disabled={ghe.daDat}
                  className={`${classGheDangChon} ${classGheDaChon}`}
                  key={index}
                  onClick={(e) => {
                    const action = {
                      type: "HANDLE_CLICK",
                      payload: {
                        ghe: ghe,
                      },
                    };
                    this.props.dispatch(action);
                  }}
                >
                  {ghe.soGhe}
                </button>
              );
            })}
          </div>
        );
      } else {
        return (
          <div
            className="d-flex justify-content-between"
            style={{ fontSize: 30 }}
            key={index}
          >
            <div className="text-white">{item.hang}</div>
            {item.danhSachGhe.map((ghe, index) => {
              return (
                <button className="rowNumber" key={index}>
                  {ghe.soGhe}
                </button>
              );
            })}
          </div>
        );
      }
    });
  };
  render() {
    let { arrDatGhe } = this.props.datVeReducer;
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
                <table className="mt-4 table table-bordered">
                  <thead className="text-white" style={{ fontSize: 24 }}>
                    <tr>
                      <th>Số ghế</th>
                      <th>Giá</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="text-warning" style={{ fontSize: 16 }}>
                    {arrDatGhe.map((item, index) => {
                      return (
                        <tr key={index} className="">
                          <td>{item.soGhe}</td>
                          <td>{item.gia}</td>
                          <td>
                            <button
                              className="btn btn-light px-2"
                              onClick={() => {
                                const action = {
                                  type: "HANDLE_REMOVE",
                                  payload: {
                                    ghe: item,
                                  },
                                };
                                this.props.dispatch(action);
                              }}
                            >
                              Hủy
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot className="text-warning" style={{ fontSize: 16 }}>
                    <tr>
                      <td></td>
                      <td>Tổng tiền</td>
                      <td>
                        {arrDatGhe.reduce((total, item) => {
                          return total + item.gia;
                        }, 0)}
                      </td>
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
