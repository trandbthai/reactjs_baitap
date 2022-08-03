import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

import AppThucHanhLayout from "./components/BaiTapThucHanhLayout/AppThucHanhLayout";
import AppThuKinh from "./components/BaiTapThuKinh/AppThuKinh";

function App() {
  return (
    <div>
      <div className="container">
        <h3 className="text-center mt-4">
          React Excercises - Thai Dien Bao Tran
        </h3>

        <div className="row mt-4">
          <div className="col-2">
            <button className="btn btn-dark mx-2 text-white">
              <NavLink className="nav-link" to="/thuchanhlayout">
                Bài tập TH Layout
              </NavLink>
            </button>
          </div>
          <div className="col-2">
            <button className="btn btn-dark mx-2 text-white">
              <NavLink className="nav-link" to="/thukinh">
                Bài tập Thử Kính
              </NavLink>
            </button>
          </div>
          <div className="col-2">
            <button className="btn btn-dark mx-2 text-white">
              <NavLink className="nav-link" to="/giohang">
                Bài tập Giỏ Hàng
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
