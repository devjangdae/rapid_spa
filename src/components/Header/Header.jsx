/* eslint-disable no-param-reassign */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Avatar } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

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
  return (
    <div css={[wrapper]}>
      <div>Rapid Collector</div>
      <div css={[profileWrapper]}>
        <div css={[numberWrapper]}>
          <Avatar size={22} icon={<UserOutlined />} />
          20220463
        </div>
        <div css={[logoutWrapper]}>
          <LogoutOutlined style={{ fontSize: "15px" }} />
          Logout
        </div>
      </div>
    </div>
  );
}

export default Header;
