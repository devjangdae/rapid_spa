/** @jsxImportSource @emotion/react */
import { Avatar } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  numberWrapper,
  logoutWrapper,
  profileWrapper,
  wrapper,
} from "./styles/index";

function Header() {
  const navigate = useNavigate();
  const userName = sessionStorage.getItem("userName");

  const outLog = () => {
    console.log("로그아웃버튼클릭.");
    sessionStorage.clear();
    navigate("/page/login");
  };

  return (
    <div css={[wrapper]}>
      <div>Rapid Collector</div>
      <div css={[profileWrapper]}>
        <div css={[numberWrapper]}>
          <Avatar size={22} icon={<UserOutlined />} />
          <span>{userName}</span>
        </div>
        <div css={[logoutWrapper]}>
          <span
            role="presentation"
            onClick={outLog}
            style={{ cursor: "pointer" }}
          >
            <LogoutOutlined style={{ fontSize: "15px" }} />
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
