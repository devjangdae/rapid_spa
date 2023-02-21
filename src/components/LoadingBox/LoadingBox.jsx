/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Modal, Spin } from "antd";

const spinStyle = css`
  display: flex;
  justify-content: center;
  margin-right: 50px;
  margin-top: 50px;
`;

function SpinBox() {
  return (
    <div css={spinStyle}>
      <Spin tip="Loading" size="large" />
    </div>
  );
}

function LoadingBox() {
  const [modal, contextHolder] = Modal.useModal();
  const countDown = () => {
    let secondsToGo = 3;

    const instance = modal.success({
      title: "3초 검색중",
      content: <SpinBox />,
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };

  return (
    <>
      <Button onClick={countDown}>Open modal to close in 3s</Button>
      {contextHolder}
    </>
  );
}

export default LoadingBox;
