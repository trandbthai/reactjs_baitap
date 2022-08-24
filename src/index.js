import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { store } from "./redux/configStore";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppThucHanhLayout from "./components/BaiTapThucHanhLayout/AppThucHanhLayout";
import AppThuKinh from "./components/BaiTapThuKinh/AppThuKinh";
import AppGioHang from "./components/BaiTapGioHang/AppGioHang";
import AppReactForm from "./components/BaiTapReactForm/AppReactForm";
import AppDatVe from "./components/BaiTapDatVe/AppDatVe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="/thuchanhlayout" element={<AppThucHanhLayout />}></Route>
          <Route path="/thukinh" element={<AppThuKinh />}></Route>
          <Route path="/giohang" element={<AppGioHang />}></Route>
          <Route path="/reactform" element={<AppReactForm />}></Route>
          <Route path="/datve" element={<AppDatVe />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
