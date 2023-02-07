/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Input, Button } from "antd";

const login_text_wrap = css`
  display: flex;
`;

const login_wrap = css`
  display: flex;
  flex-direction: column;
  width: 550px;
  gap: 20px;
`;

const login_box = css`
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

const title_text = css`
  font-size: 90px;
  font-weight: 800;
  color: #000f45;
`;

const title_text_wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const title_box = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 400px;
`;

const content_container = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 120px;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

const basic_container = css`
  display: flex;
  width: 100%;
  height: 100%;
  background: #f0f2f5;
`;

const bg_pink = css`
  background-color: pink;
`;

const Logintest = () => {
  return (
    <div css={[basic_container]}>
      <div css={[content_container]}>
        
        <div css={[title_box]}>
          <div css={[title_text_wrap]}>
            <div css={[title_text]}>Rapid</div>
            <div css={[title_text]}>Collector</div>
          </div>
        </div>

        <div css={[login_box]}>
          <div css={[login_wrap]}>
            <div css={[login_text_wrap]}>id</div>
            <Input placeholder="Basic usage" />

            <div css={[login_text_wrap]}>pw</div>
            <Input placeholder="Basic usage" />

            <div css={[login_text_wrap]}>space</div>
            <Button type="primary">Primary Button</Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Logintest;
