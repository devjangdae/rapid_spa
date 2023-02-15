import TitleBox from "../../components/TitleBox/titleBox";
import LoginBox from "../../components/LoginBox/loginBox";
import "./loginrapid.css";

function Loginrapid() {
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
    </div>
  );
}

export default Loginrapid;
