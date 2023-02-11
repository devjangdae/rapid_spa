/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TitleBox from "../../components/TitleBox/titleBox";
import LoginBox from "../../components/LoginBox/loginBox";

const contentContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 120px;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

const basicContainer = css`
  display: flex;
  width: 100%;
  height: 100%;
  background: #f0f2f5;
`;

function Login() {
  return (
    <div className="basicContainer" css={[basicContainer]}>
      <div className="contentContainer" css={[contentContainer]}>
        <TitleBox />
        <LoginBox />
      </div>
    </div>
  );
}

export default Login;
