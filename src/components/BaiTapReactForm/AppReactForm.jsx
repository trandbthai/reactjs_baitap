import React, { Component } from "react";
import { connect } from "react-redux";

class AppReactForm extends Component {
  render() {
    let { arrSV, sinhVien, errors, searchArr } = this.props.reactFormReducer;
    let showingData = searchArr.length > 0 ? searchArr : arrSV;
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand h3 mx-2">Thông tin sinh viên</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <form className="d-flex">
              <input
                className="form-control mx-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onInput={(e) => {
                  const action = {
                    type: "HANDLE_SEARCH",
                    payload: {
                      searchWord: e.target.value,
                    },
                  };
                  this.props.dispatch(action);
                }}
              />
            </form>
          </div>
        </nav>

        {/* Input */}
        <form className="mt-4">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <p>Mã sinh viên</p>

                <input
                  className="form-control mb-2"
                  id="maSV"
                  data-type="number"
                  value={sinhVien.maSV}
                  onChange={(e) => {
                    const action = {
                      type: "HANDLE_CHANGE_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                        dataType: e.target.getAttribute("data-type"),
                      },
                    };
                    this.props.dispatch(action);
                  }}
                />
                <span className="text-danger">{errors.maSV}</span>
              </div>
              <div className="form-group">
                <p>Số điện thoại</p>
                <input
                  className="form-control mb-2"
                  id="phone"
                  data-type="number"
                  value={sinhVien.phone}
                  onChange={(e) => {
                    const action = {
                      type: "HANDLE_CHANGE_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                        dataType: e.target.getAttribute("data-type"),
                      },
                    };
                    this.props.dispatch(action);
                  }}
                />
              </div>
              <span className="text-danger">{errors.phone}</span>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <p>Họ tên</p>
                <input
                  className="form-control mb-2"
                  id="name"
                  data-type="text"
                  value={sinhVien.name}
                  onChange={(e) => {
                    const action = {
                      type: "HANDLE_CHANGE_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                        dataType: e.target.getAttribute("data-type"),
                      },
                    };
                    this.props.dispatch(action);
                  }}
                />
                <span className="text-danger">{errors.name}</span>
              </div>
              <div className="form-group">
                <p>Email</p>

                <input
                  className="form-control mb-2"
                  id="email"
                  data-type="email"
                  value={sinhVien.email}
                  onChange={(e) => {
                    const action = {
                      type: "HANDLE_CHANGE_INPUT",
                      payload: {
                        id: e.target.id,
                        value: e.target.value,
                        dataType: e.target.getAttribute("data-type"),
                      },
                    };
                    this.props.dispatch(action);
                  }}
                />
                <span className="text-danger">{errors.email}</span>
              </div>
            </div>
          </div>
          <button
            className="btn btn-success mt-2"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const action = {
                type: "HANDLE_SUBMIT_STUDENT",
                payload: {
                  sinhVien: { ...sinhVien },
                  errors: { ...errors },
                },
              };
              this.props.dispatch(action);
            }}
          >
            Thêm sinh viên
          </button>
          <button
            className="btn btn-primary mt-2 mx-2"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const action = {
                type: "HANDLE_SUBMIT_UPDATE",
                payload: {
                  sinhVien: { ...sinhVien },
                },
              };
              this.props.dispatch(action);
            }}
          >
            Cập nhật
          </button>
        </form>

        {/* Table */}
        <div className="table-responsive-sm">
          <table className="mt-4 table ">
            <thead className="table-dark">
              <tr>
                <th>Mã SV</th>
                <th>Họ tên</th>
                <th className="">Số điện thoại</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {showingData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.maSV}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        className="btn btn-primary mx-2"
                        onClick={() => {
                          const action = {
                            type: "HANDLE_EDIT",
                            payload: {
                              sinhVienClick: item,
                            },
                          };
                          this.props.dispatch(action);
                        }}
                      >
                        Sửa
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          const action = {
                            type: "HANDLE_DELETE",
                            payload: {
                              maSVClick: item.maSV,
                            },
                          };
                          this.props.dispatch(action);
                        }}
                      >
                        Xoá
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reactFormReducer: state.reactFormReducer,
});

export default connect(mapStateToProps)(AppReactForm);
