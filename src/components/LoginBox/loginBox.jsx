/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import * as md5 from "md5";

const loginTextWrap = css`
  display: flex;
`;

const loginWrap = css`
  display: flex;
  flex-direction: column;
  width: 450px;
  gap: 15px;
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
  const [id, setId] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    // Prevent the default submit and page reload
    // e.preventDefault();
    message.error("Fail");

    // Handle validations
    axios
      .post(`/rss/api/auths/login?username=${id}&password=${md5(password)}`)
      .then((response) => {
        console.log(response);

        // Handle response
        message.success("Login Suceessful!");
      });
  };

  return (
    <div className="loginBox" css={[loginBox]}>
      <Form onFinish={handleSubmit}>
        <div className="loginWrap" css={[loginWrap]}>
          <div className="loginTextWrap" css={[loginTextWrap]}>
            ID
          </div>
          <div>
            <Form.Item
              rules={[
                {
                  required: true,
                  type: "string",
                  message: "Please enter id",
                },
              ]}
              name="userid"
            >
              <Input
                placeholder="Enter your id"
                type="id"
                name="id"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </Form.Item>
          </div>
          <div className="loginTextWrap" css={[loginTextWrap]}>
            PASSWORD
          </div>
          <div>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter password",
                },
              ]}
              name="userpassword"
            >
              <Input.Password
                placeholder="Enter your password"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
          </div>
          <Button
            style={{ height: "80px", fontSize: "32px" }}
            type="primary"
            htmlType="submit"
            block
          >
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default LoginBox;
