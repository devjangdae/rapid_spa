/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Input, Button } from "antd";

const login_text_wrap = css`
  display: flex;
`;

const login_wrap = css`
  display: flex;
  flex-direction: column;
  width: 450px;
  gap: 20px;
  padding: 50px;
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
    <div className="basic_container" css={[basic_container]}>
      <div className="content_container" css={[content_container]}>
        <div className="title_box" css={[title_box]}>
          <div className="title_text_wrap" css={[title_text_wrap]}>
            <div className="title_text" css={[title_text]}>Rapid</div>
            <div className="title_text" css={[title_text]}>Collector</div>
          </div>
        </div>

        <div className="login_box" css={[login_box]}>
          <div className="login_wrap" css={[login_wrap]}>
            <div>
              <div className="login_text_wrap" css={[login_text_wrap]}>id</div>
              <div>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div>
              <div className="login_text_wrap" css={[login_text_wrap]}>pw</div>
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
};

export default Logintest;
