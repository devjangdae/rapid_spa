/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Input, Button } from "antd";

const loginTextWrap = css`
  display: flex;
`;

const loginWrap = css`
  display: flex;
  flex-direction: column;
  width: 450px;
  gap: 20px;
  padding: 50px;
`;

const loginBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 400px;
  background-color: #ffffff;

  border: 1px solid #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

function LoginBox() {
  return (
    <div className="loginBox" css={[loginBox]}>
      <div className="loginWrap" css={[loginWrap]}>
        <div>
          <div className="loginTextWrap" css={[loginTextWrap]}>
            id
          </div>
          <div>
            <Input placeholder="Basic usage" />
          </div>
        </div>
        <div>
          <div className="loginTextWrap" css={[loginTextWrap]}>
            pw
          </div>
          <div>
            <Input placeholder="Basic usage" />
          </div>
        </div>
        <Button type="primary">Primary Button</Button>
      </div>
    </div>
  );
}

export default LoginBox;
