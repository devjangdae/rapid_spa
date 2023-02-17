import { Outlet } from "react-router-dom";
import TitleBox from "../../components/TitleBox/index";
import LoginBox from "../../components/LoginBox/index";
// import "./loginrapid.css";

function Login() {
  return (
    <div className="basic-container" style={{ justifyContent: "center" }}>
      <div className="basic-header" style={{ display: "none" }}>
        {" "}
      </div>
      <div className="content-container">
        <div className="login-container">
          <TitleBox />
          <LoginBox />
        </div>
      </div>
      <div className="basic-footer" style={{ display: "none" }}>
        {" "}
      </div>
      <Outlet />
    </div>
  );
}

export default Login;
