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

const titleText = css`
  font-size: 90px;
  font-weight: 800;
  color: #000f45;
`;

const titleTextWrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const titleBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 400px;
`;

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
  console.log("asd");
  return (
    <div className="basicContainer" css={[basicContainer]}>
      <div className="contentContainer" css={[contentContainer]}>
        <div className="titleBox" css={[titleBox]}>
          <div className="titleTextWrap" css={[titleTextWrap]}>
            <div className="titleText" css={[titleText]}>
              Rapid
            </div>
            <div className="titleText" css={[titleText]}>
              Collector
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
}

export default Login;
