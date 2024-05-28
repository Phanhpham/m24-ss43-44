import Header from "./components/Header";
import Login from "./components/Login";
import "./components/Admin.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
export default function App() {
  return (
    <div>
      <Login />
      <br />
      <div className="admin">
        <Header />
        <div style={{ display: "flex" }}>
          <Navbar />
          <Main />
        </div>
      </div>
    </div>
  );
}
