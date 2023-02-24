import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TitleBox from "../../components/TitleBox/index";
import LoginBox from "../../components/LoginBox/index";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("accessToken")) {
      console.log("로그인 토큰이미 존재함. 메뉴얼페이지로 이동합니다.");
      navigate("/page/manual");
    }
  }, []);

  return (
    <div className="basic-container" style={{ justifyContent: "center" }}>
      <div className="content-container">
        <div className="login-container">
          <TitleBox />
          <LoginBox />
        </div>
      </div>
    </div>
  );
}

export default Login;
