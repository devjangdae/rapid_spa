/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import * as md5 from "md5";
import { useNavigate } from "react-router-dom";
import {
  loginTextWrap,
  loginWrap,
  loginBox,
  loginBtnStyle,
} from "./styles/index";

function LoginBox() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState([]);
  const [userId, setUserId] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("accessToken")) {
      navigate("/page/login");
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        `/rss/api/auths/login?username=${id}&password=${md5(password)}`
      );
      setUserName(response.data.userName);
      setUserId(response.data.userId);
      // console.log(userName);
      // console.log(userId);
      sessionStorage.setItem("userName", response.data.userName);
      sessionStorage.setItem("accessToken", response.data.accessToken);
      sessionStorage.setItem("refreshToken", response.data.refreshToken);
      message.success("Login Suceessful!");
      navigate("/page/manual");
    } catch (e) {
      // console.log(e);
      message.error("Login Fail");
    }
  };

  return (
    <div css={[loginBox]}>
      <Form onFinish={handleSubmit}>
        <div css={[loginWrap]}>
          <div css={[loginTextWrap]}>ID</div>
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
          <div css={[loginTextWrap]}>PASSWORD</div>
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
          <Button css={loginBtnStyle} type="primary" htmlType="submit" block>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default LoginBox;
