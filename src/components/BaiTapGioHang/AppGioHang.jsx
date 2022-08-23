import React, { Component } from "react";
import ProductInfo from "./ProductInfo";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default class AppGioHang extends Component {
  state = {
    product: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    modalProductList: [],
  };

  xemChiTiet = (productClick) => {
    this.setState({
      product: productClick,
    });
  };

  themGioHang = (productClick) => {
    let newProductList = [...this.state.modalProductList];

    for (let product of newProductList) {
      if (product.maSP === productClick.maSP) {
        this.themSoLuong(product);
        return;
      }
    }
    productClick.soLuong = 1;
    newProductList.push(productClick);
    this.setState({
      modalProductList: newProductList,
    });
  };

  xoaGioHang = (productClick) => {
    let newProductList = [...this.state.modalProductList];
    for (let index in newProductList) {
      if (newProductList[index].maSP === productClick.maSP) {
        newProductList.splice(index, 1);
      }
    }
    this.setState({
      modalProductList: newProductList,
    });
  };

  themSoLuong = (productClick) => {
    let newProductList = [...this.state.modalProductList];

    for (let index in newProductList) {
      if (newProductList[index].maSP === productClick.maSP) {
        newProductList[index].soLuong += 1;
        this.setState({
          modalProductList: newProductList,
        });
      }
    }
  };

  giamSoLuong = (productClick) => {
    let newProductList = [...this.state.modalProductList];

    for (let index in newProductList) {
      if (newProductList[index].maSP === productClick.maSP) {
        if (newProductList[index].soLuong === 1) {
          this.xoaGioHang(newProductList[index]);
        } else {
          newProductList[index].soLuong -= 1;
          this.setState({
            modalProductList: newProductList,
          });
        }
      }
    }
  };

  render() {
    return (
      <div className="container">
        <Cart
          modalProductList={this.state.modalProductList}
          xoaGioHang={this.xoaGioHang}
          themSoLuong={this.themSoLuong}
          giamSoLuong={this.giamSoLuong}
        />

        <div className="row mt-2">
          <ProductList
            xemChiTiet={this.xemChiTiet}
            themGioHang={this.themGioHang}
          />
        </div>
        <hr />
        <div className="mt-4">
          <ProductInfo product={this.state.product} />
        </div>
      </div>
    );
  }
}
