/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Avatar } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const wrapper = css`
  display: flex;
  justify-content: space-between;
`;

const profileWrapper = css`
  display: flex;
`;

const logoutWrapper = css`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const numberWrapper = css`
  margin-right: 30px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

function Header() {
  const navigate = useNavigate();

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
          20220463
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
