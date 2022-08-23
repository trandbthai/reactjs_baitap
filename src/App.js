import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

import AppThucHanhLayout from "./components/BaiTapThucHanhLayout/AppThucHanhLayout";
import AppThuKinh from "./components/BaiTapThuKinh/AppThuKinh";

function App() {
  return (
    <div>
      <div className="container">
        <h3 className="text-center mt-4">
          React Excercises - Thái Điền Bảo Trân
        </h3>

        <div className="row mt-4">
          <div className=" col-md-2 col-6">
            <button className="btn btn-dark mx-md-2 my-2 text-white w-100">
              <NavLink className="nav-link" to="/thuchanhlayout">
                Bài tập TH Layout
              </NavLink>
            </button>
          </div>
          <div className="col-md-2 col-6">
            <button className="btn btn-dark mx-md-2 my-2 text-white w-100">
              <NavLink className="nav-link" to="/thukinh">
                Bài tập Thử Kính
              </NavLink>
            </button>
          </div>
          <div className="col-md-2 col-6">
            <button className="btn btn-dark mx-md-2 my-2 text-white w-100">
              <NavLink className="nav-link" to="/giohang">
                Bài tập Giỏ Hàng
              </NavLink>
            </button>
          </div>
          <div className="col-md-2 col-6">
            <button className="btn btn-dark mx-md-2 my-2 text-white w-100">
              <NavLink className="nav-link" to="/reactform">
                Bài tập React Form
              </NavLink>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4" style={{ minHeight: 900 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
