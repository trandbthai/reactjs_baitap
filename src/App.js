import logo from "./logo.svg";
import "./App.css";
import Header from "./components/BaiTapThucHanhLayout/Header";
import Body from "./components/BaiTapThucHanhLayout/Body";
import Footer from "./components/BaiTapThucHanhLayout/Footer";

function App() {
  return (
    <div className="App">
      <div
        style={{ height: "100vh" }}
        className="d-flex flex-column justify-content-between"
      >
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
