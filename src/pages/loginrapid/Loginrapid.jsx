import TitleBox from "../../components/TitleBox/titleBox";
import LoginBox from "../../components/LoginBox/loginBox";
import "./loginrapid.css";

function Loginrapid() {
  return (
    <div className="basic-container">
      <div className="basic-header"> </div>
      <div className="content-container">
        <div className="login-container">
          <TitleBox />
          <LoginBox />
        </div>
      </div>
      <div className="basic-footer"> </div>
    </div>
  );
}

export default Loginrapid;
