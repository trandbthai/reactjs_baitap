import React, { Component } from "react";
import { connect } from "react-redux";
import "../../Assets/styles/styles.css";
import background from "../../Assets/img/movie/bgmovie.jpg";
export class AppDatVe extends Component {
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
                <div style={{ fontSize: 30 }}>
                  <div className="d-flex justify-content-around">
                    <div></div>
                    <button className="rowNumber">1</button>
                    <button className="rowNumber">2</button>
                    <button className="rowNumber">3</button>
                    <button className="rowNumber">4</button>
                    <button className="rowNumber">5</button>
                    <button className="rowNumber">6</button>
                    <button className="rowNumber">7</button>
                    <button className="rowNumber">8</button>
                    <button className="rowNumber">9</button>
                    <button className="rowNumber">10</button>
                    <button className="rowNumber">11</button>
                    <button className="rowNumber">12</button>
                  </div>
                  <div className="w-100 text-white d-flex justify-content-around">
                    A<button className="ghe">A1</button>
                    <button className="ghe">A2</button>
                    <button className="ghe">A3</button>
                    <button className="ghe">A4</button>
                    <button className="ghe">A5</button>
                    <button className="ghe">A6</button>
                    <button className="ghe">A7</button>
                    <button className="ghe">A8</button>
                    <button className="ghe">A9</button>
                    <button className="ghe">A10</button>
                    <button className="ghe">A11</button>
                    <button className="ghe">A12</button>
                  </div>
                  <div className="w-100 text-white d-flex justify-content-around">
                    B<button className="ghe">B1</button>
                    <button className="ghe">B2</button>
                    <button className="ghe">B3</button>
                    <button className="ghe">B4</button>
                    <button className="ghe">B5</button>
                    <button className="ghe">B6</button>
                    <button className="ghe">B7</button>
                    <button className="ghe">B8</button>
                    <button className="ghe">B9</button>
                    <button className="ghe">B10</button>
                    <button className="ghe">B11</button>
                    <button className="ghe">B12</button>
                  </div>
                  <div className="w-100 text-white d-flex justify-content-around">
                    C<button className="ghe">C1</button>
                    <button className="ghe">C2</button>
                    <button className="ghe">C3</button>
                    <button className="ghe">C4</button>
                    <button className="ghe">C5</button>
                    <button className="ghe">C6</button>
                    <button className="ghe">C7</button>
                    <button className="ghe">C8</button>
                    <button className="ghe">C9</button>
                    <button className="ghe">C10</button>
                    <button className="ghe">C11</button>
                    <button className="ghe">C12</button>
                  </div>
                  <div className="w-100 text-white d-flex justify-content-around">
                    D<button className="ghe">D1</button>
                    <button className="ghe">D2</button>
                    <button className="ghe">D3</button>
                    <button className="ghe">D4</button>
                    <button className="ghe">D5</button>
                    <button className="ghe">D6</button>
                    <button className="ghe">D7</button>
                    <button className="ghe">D8</button>
                    <button className="ghe">D9</button>
                    <button className="ghe">D10</button>
                    <button className="ghe">D11</button>
                    <button className="ghe">D12</button>
                  </div>
                  <div className="w-100 text-white d-flex justify-content-around">
                    E<button className="ghe">E1</button>
                    <button className="ghe">E2</button>
                    <button className="ghe">E3</button>
                    <button className="ghe">E4</button>
                    <button className="ghe">E5</button>
                    <button className="ghe">E6</button>
                    <button className="ghe">E7</button>
                    <button className="ghe">E8</button>
                    <button className="ghe">E9</button>
                    <button className="ghe">E10</button>
                    <button className="ghe">E11</button>
                    <button className="ghe">E12</button>
                  </div>
                  <div className="w-100 text-white d-flex justify-content-around">
                    F<button className="ghe">F1</button>
                    <button className="ghe">F2</button>
                    <button className="ghe">F3</button>
                    <button className="ghe">F4</button>
                    <button className="ghe">F5</button>
                    <button className="ghe">F6</button>
                    <button className="ghe">F7</button>
                    <button className="ghe">F8</button>
                    <button className="ghe">F9</button>
                    <button className="ghe">F10</button>
                    <button className="ghe">F11</button>
                    <button className="ghe">F12</button>
                  </div>

                  <div className="w-100 text-white d-flex justify-content-around">
                    G<button className="ghe">G1</button>
                    <button className="ghe">G2</button>
                    <button className="ghe">G3</button>
                    <button className="ghe">G4</button>
                    <button className="ghe">G5</button>
                    <button className="ghe">G6</button>
                    <button className="ghe">G7</button>
                    <button className="ghe">G8</button>
                    <button className="ghe">G9</button>
                    <button className="ghe">G10</button>
                    <button className="ghe">G11</button>
                    <button className="ghe">G12</button>
                  </div>
                  <div className="w-100 text-white d-flex justify-content-around">
                    H<button className="ghe">H1</button>
                    <button className="ghe">H2</button>
                    <button className="ghe">H3</button>
                    <button className="ghe">H4</button>
                    <button className="ghe">H5</button>
                    <button className="ghe">H6</button>
                    <button className="ghe">H7</button>
                    <button className="ghe">H8</button>
                    <button className="ghe">H9</button>
                    <button className="ghe">H10</button>
                    <button className="ghe">H11</button>
                    <button className="ghe">H12</button>
                  </div>
                  <div className="w-100 text-white d-flex justify-content-around">
                    I<button className="ghe">I1</button>
                    <button className="ghe">I2</button>
                    <button className="ghe">I3</button>
                    <button className="ghe">I4</button>
                    <button className="ghe">I5</button>
                    <button className="ghe">I6</button>
                    <button className="ghe">I7</button>
                    <button className="ghe">I8</button>
                    <button className="ghe">I9</button>
                    <button className="ghe">I10</button>
                    <button className="ghe">I11</button>
                    <button className="ghe">I12</button>
                  </div>
                  <div className="w-100 text-white d-flex justify-content-around">
                    J<button className="ghe">J1</button>
                    <button className="ghe">J2</button>
                    <button className="ghe">J3</button>
                    <button className="ghe">J4</button>
                    <button className="ghe">J5</button>
                    <button className="ghe">J6</button>
                    <button className="ghe">J7</button>
                    <button className="ghe">J8</button>
                    <button className="ghe">J9</button>
                    <button className="ghe">J10</button>
                    <button className="ghe">J11</button>
                    <button className="ghe">J12</button>
                  </div>
                </div>
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
                    <tr></tr>
                    <th>Số ghế</th>
                    <th>Giá</th>
                    <th></th>
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(AppDatVe);
